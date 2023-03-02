import React, { Component, CSSProperties, ReactNode } from 'react';
import { css } from '@emotion/react';
import { Overlay } from '../overlays';
import { Notice } from './Notice';
import theme from '../theme';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { NoticeDefinition, NoticeConfig } from './types';
import {
  TRANSITION_ENTER_DURATION_MS,
  TRANSITION_EXIT_DURATION_MS,
} from './constants';

export type NotificationProps = {
  /**
   * If provided, the notification container will use this style as a final override
   */
  style?: CSSProperties;
};

type NotificationState = {
  notices: NoticeDefinition[];
};

/**
 * UUID generator for notifications
 */
let uuidSeed = 0;
const getUuid = () => {
  uuidSeed += 1;
  return `ac-notification-${uuidSeed}`;
};

/**
 * Props that are passed through to the child via a React.cloneElement
 */
type PropsFromOverlay = {
  /**
   * Transition group state for the notification container
   * Marked as optional because it is not passed in directly
   */
  isOpen?: boolean;
};

interface NotificationContainerProps extends PropsFromOverlay {
  children: ReactNode;
}

/**
 * The container for the notifications that is used in the CSS transition group
 */
function NotificationContainer(props: NotificationContainerProps) {
  const { isOpen, ...passThroughProps } = props;
  return (
    <div
      className="ac-notification-container"
      css={css`
        position: fixed;
        bottom: ${theme.spacing.margin24}px;
        right: ${theme.spacing.margin24}px;
        & .ac-notice + .ac-notice {
          margin-top: ${theme.spacing.margin16}px;
        }
      `}
      {...passThroughProps}
    >
      {props.children}
    </div>
  );
}

/**
 * The notifications holder (container overlay) where the messages are rendered
 */
export class Notification extends Component<
  NotificationProps,
  NotificationState
> {
  constructor(props: NotificationProps) {
    super(props);
    this.state = {
      notices: [],
    };

    // Bind the methods
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }
  add(noticeConfig: NoticeConfig) {
    this.setState({
      notices: [
        ...this.state.notices,
        {
          id: getUuid(),
          ...noticeConfig,
        },
      ],
    });
  }

  remove(id: string) {
    this.setState({
      notices: this.state.notices.filter(notice => notice.id !== id),
    });
  }

  render() {
    return (
      <Overlay isOpen>
        <NotificationContainer {...this.props}>
          <TransitionGroup className="ac-notice-list">
            {this.state.notices.map(notice => (
              <CSSTransition
                key={notice.id}
                timeout={{
                  enter: TRANSITION_ENTER_DURATION_MS,
                  exit: TRANSITION_EXIT_DURATION_MS,
                }}
                classNames="is" // Produces is-entering, etc.
              >
                <Notice
                  key={notice.id}
                  {...notice}
                  onClose={() => this.remove(notice.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </NotificationContainer>
      </Overlay>
    );
  }
}

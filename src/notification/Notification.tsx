import React, { Component, CSSProperties } from 'react';
import { css } from '@emotion/core';
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
          {...this.props}
        >
          {/* @ts-ignore */}
          <TransitionGroup className="ac-notice-list">
            {this.state.notices.map(notice => (
              /* @ts-ignore */
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
        </div>
      </Overlay>
    );
  }
}

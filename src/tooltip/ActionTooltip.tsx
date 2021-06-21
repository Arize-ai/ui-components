import React, { ReactNode, useContext, HTMLProps, CSSProperties } from 'react';
import { useTooltip } from '@react-aria/tooltip';
import { classNames } from '../utils';
import { PlacementAxis } from '../types';
import { mergeProps } from '@react-aria/utils';
import { TooltipContext } from './context';
import { Text } from '../content';
import { actionTooltipCSS, actionTooltipHeaderWrap } from './styles';

interface ActionTooltipProps extends HTMLProps<HTMLDivElement> {
  isOpen?: boolean;
  /**
   * The placement of the element with respect to its anchor element.
   * @default 'right'
   */
  placement?: PlacementAxis;
  children: ReactNode;
  title: string;
  subTitle?: string;
  /**
   * Style overrides. Not guaranteed to be not overridden
   */
  UNSAFE_style?: CSSProperties;
}

/**
 * A variant of the tooltip that is intended for the user to take action
 * @param props
 * @returns
 */
function ActionTooltip(props: ActionTooltipProps) {
  const {
    ref: overlayRef,
    arrowProps,
    state,
    ...tooltipProviderProps
  } = useContext(TooltipContext);

  props = mergeProps(props, tooltipProviderProps);
  const {
    title,
    subTitle,
    placement = 'right',
    isOpen,
    style: propsStyle,
    id,
  } = props;
  const { tooltipProps } = useTooltip(props, state);

  const style = {
    ...props?.UNSAFE_style,
    ...propsStyle,
    ...tooltipProps.style,
  };

  return (
    <div
      id={id}
      {...tooltipProps}
      style={style}
      className={classNames(
        'ac-action-tooltip',
        `ac-action-tooltip--${placement}`,
        {
          'is-open': isOpen,
        }
      )}
      ref={overlayRef}
      css={actionTooltipCSS({ placement })}
    >
      <div
        css={actionTooltipHeaderWrap}
        className={classNames('ac-action-tooltip__title-wrap')}
      >
        <Text color="white90" textSize="large" elementType="h5" weight="heavy">
          {title}
        </Text>
        {subTitle && (
          <Text color="white70" textSize="small" elementType="h6">
            {subTitle}
          </Text>
        )}
      </div>
      {props.children}
    </div>
  );
}

/**
 * Display container for Tooltip content. Has a directional arrow dependent on its placement.
 */
let _ActionTooltip = React.forwardRef(ActionTooltip);
export { _ActionTooltip as ActionTooltip };

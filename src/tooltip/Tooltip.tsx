import React, { ReactNode, useContext, HTMLProps } from 'react';
import { useTooltip } from '@react-aria/tooltip';
import { classNames } from '../utils';
import { PlacementAxis } from '../types';
import { mergeProps } from '@react-aria/utils';
import { TooltipContext } from './context';
import { Text } from '../content';
import { tooltipCSS, tooltipTipCSS } from './styles';

interface TooltipProps extends HTMLProps<HTMLDivElement> {
  isOpen?: boolean;
  /**
   * The placement of the element with respect to its anchor element.
   * @default 'top'
   */
  placement?: PlacementAxis;
  children: ReactNode;
}

function Tooltip(props: TooltipProps) {
  const {
    ref: overlayRef,
    arrowProps,
    state,
    ...tooltipProviderProps
  } = useContext(TooltipContext);
  props = mergeProps(props, tooltipProviderProps);
  let { placement = 'top', isOpen, style, id } = props;
  let { tooltipProps } = useTooltip(props, state);

  return (
    <div
      id={id}
      style={style}
      {...tooltipProps}
      className={classNames('ac-tooltip', `ac-tooltip--${placement}`, {
        'is-open': isOpen,
      })}
      ref={overlayRef}
      css={tooltipCSS({ placement })}
    >
      {props.children && (
        <Text
          color="white90"
          textSize="medium"
          className={classNames('ac-tooltip-label')}
        >
          {props.children}
        </Text>
      )}
      <span
        {...arrowProps}
        className={classNames('ac-Tooltip-tip')}
        css={tooltipTipCSS({ placement })}
      />
    </div>
  );
}

/**
 * Display container for Tooltip content. Has a directional arrow dependent on its placement.
 */
let _Tooltip = React.forwardRef(Tooltip);
export { _Tooltip as Tooltip };

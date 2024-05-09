import React, { ReactNode, useContext, HTMLProps } from 'react';
import { useTooltip } from '@react-aria/tooltip';
import { mergeProps } from '@react-aria/utils';
import { classNames } from '../utils';
import { PlacementAxis, DOMRef } from '../types';
import { Text } from '../content';
import { TooltipContext } from './context';
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

function Tooltip(props: TooltipProps, _ref: DOMRef) {
  const {
    ref: overlayRef,
    arrowProps,
    state,
    ...tooltipProviderProps
  } = useContext(TooltipContext);
  props = mergeProps(props, tooltipProviderProps);
  const { placement = 'top', isOpen, style, id } = props;
  const { tooltipProps } = useTooltip(props, state);

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
          color="text-900"
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
const _Tooltip = React.forwardRef(Tooltip);
export { _Tooltip as Tooltip };

import React, { ReactNode, useContext, HTMLProps, CSSProperties } from 'react';
import { useTooltip } from '@react-aria/tooltip';
import { classNames } from '../utils';
import { PlacementAxis, DOMRef } from '../types';
import { mergeProps } from '@react-aria/utils';
import { TooltipContext } from '../tooltip/context';
import { helpTooltipCSS } from './styles';

interface HelpTooltipProps extends HTMLProps<HTMLDivElement> {
  isOpen?: boolean;
  /**
   * The placement of the element with respect to its anchor element.
   * @default 'right'
   */
  placement?: PlacementAxis;
  children: ReactNode;
  /**
   * Style overrides. Not guaranteed to be not overridden
   */
  UNSAFE_style?: CSSProperties;
}

/**
 * A variant of the tooltip that is intended for users to gain info or help
 * @param props
 * @returns
 */
function HelpTooltip(props: HelpTooltipProps, _ref: DOMRef) {
  const {
    ref: overlayRef,
    arrowProps,
    state,
    ...tooltipProviderProps
  } = useContext(TooltipContext);

  props = mergeProps(props, tooltipProviderProps);
  const { placement = 'right', isOpen, style: propsStyle, id } = props;
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
        'ac-help-tooltip',
        `ac-help-tooltip--${placement}`,
        {
          'is-open': isOpen,
        }
      )}
      ref={overlayRef}
      css={helpTooltipCSS({ placement })}
    >
      {props.children}
    </div>
  );
}

/**
 * Display container for Tooltip content. Has a directional arrow dependent on its placement.
 */
let _HelpTooltip = React.forwardRef(HelpTooltip);
export { _HelpTooltip as HelpTooltip };

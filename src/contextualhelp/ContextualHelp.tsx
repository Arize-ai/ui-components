import { ActionButton } from '../button';
import {
  AriaLabelingProps,
  DOMProps,
  FocusableRef,
  OverlayTriggerProps,
  Placement,
  PositionProps,
} from '../types';

import { mergeProps, useLabels } from '@react-aria/utils';
import React, { ReactNode } from 'react';

import { Icon, InfoOutline, QuestionOutline } from '../icon';
import { HelpTooltip, TooltipTrigger } from '../tooltip';

export interface ContextualHelpProps
  extends OverlayTriggerProps,
    PositionProps,
    DOMProps,
    AriaLabelingProps {
  /** Contents of the Contextual Help popover. */
  children: ReactNode;
  /**
   * Indicates whether contents are informative or provides helpful guidance.
   * @default 'help'
   */
  variant?: 'help' | 'info';
  /**
   * The placement of the popover with respect to the action button.
   * @default 'bottom start'
   */
  placement?: Placement;
  /**
   * The delay time for the tooltip to show up in milliseconds
   * @default 0
   */
  delay?: number;
}

function ContextualHelp(
  props: ContextualHelpProps,
  ref: FocusableRef<HTMLButtonElement>
) {
  let {
    variant = 'help',
    placement = 'bottom start',
    children,
    delay = 0,
    ...otherProps
  } = props;

  const iconSVG = variant === 'info' ? <InfoOutline /> : <QuestionOutline />;
  const icon = <Icon svg={iconSVG} style={{ fontSize: 'inherit' }} />;

  let labelProps = useLabels(otherProps);

  return (
    <TooltipTrigger {...otherProps} placement={placement} delay={delay}>
      <ActionButton
        {...mergeProps(otherProps, labelProps, { isDisabled: false })}
        ref={ref}
        isQuiet
      >
        {icon}
      </ActionButton>
      <HelpTooltip>{children}</HelpTooltip>
    </TooltipTrigger>
  );
}

/**
 * Contextual help shows a user extra information about the state of an adjacent component, or a total view.
 */
let _ContextualHelp = React.forwardRef(ContextualHelp);
export { _ContextualHelp as ContextualHelp };

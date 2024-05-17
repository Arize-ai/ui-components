import { FocusRing } from '@react-aria/focus';
import React, { RefObject } from 'react';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { DOMProps, FocusableRef, StyleProps } from '../types';
import { ButtonProps } from '../types';
import { classNames, useFocusableRef, useStyleProps } from '../utils';

interface FieldButtonProps extends ButtonProps, DOMProps, StyleProps {
  isQuiet?: boolean;
  isActive?: boolean;
  validationState?: 'valid' | 'invalid';
  isInvalid?: boolean;
  focusRingClass?: string;
}

// @private
function FieldButton(props: FieldButtonProps, ref: FocusableRef) {
  let {
    isQuiet,
    isDisabled,
    validationState,
    isInvalid,
    children,
    autoFocus,
    isActive,
    focusRingClass,
    ...otherProps
  } = props;
  let domRef = useFocusableRef(ref) as RefObject<HTMLButtonElement>;
  let { buttonProps, isPressed } = useButton(props, domRef);
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let { styleProps } = useStyleProps(otherProps);

  return (
    <FocusRing
      focusRingClass={classNames('focus-ring', focusRingClass)}
      autoFocus={autoFocus}
    >
      <button
        {...mergeProps(buttonProps, hoverProps)}
        ref={domRef}
        className={classNames(
          'ac-field-button',
          {
            'ac-field-button--quiet': isQuiet,
            'is-active': isActive || isPressed,
            'is-disabled': isDisabled,
            'ac-field-button--invalid':
              isInvalid || validationState === 'invalid',
            'is-hovered': isHovered,
          },
          styleProps.className
        )}
      >
        {children}
      </button>
    </FocusRing>
  );
}

let _FieldButton = React.forwardRef(FieldButton);
export { _FieldButton as FieldButton };

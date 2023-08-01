import { AriaSliderThumbProps } from '@react-types/slider';
import { classNames } from '../utils';
import { FocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import React, { RefObject, useRef } from 'react';
import { SliderState } from '@react-stately/slider';
import { useHover } from '@react-aria/interactions';
import { useSliderThumb } from '@react-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { css } from '@emotion/react';

const handleCSS = css`
  top: calc(var(--ac-slider-height, var(--ac-alias-single-line-height)) / 2);
  z-index: 2;
  box-sizing: border-box;
  width: var(--ac-slider-handle-width, var(--ac-global-dimension-size-200));
  height: var(--ac-slider-handle-height, var(--ac-global-dimension-size-200));
  border-width: var(
    --ac-slider-handle-border-size,
    var(--ac-alias-border-size-thick)
  );
  border-radius: var(
    --ac-slider-handle-border-radius,
    var(--ac-global-rounding-medium)
  );
  transition: border-width
    var(--ac-slider-animation-duration, var(--ac-global-animation-duration-100))
    ease-in-out;
  border-style: solid;
  outline: none;
  display: inline-block;
  position: absolute;
`;
interface SliderThumbProps extends AriaSliderThumbProps {
  trackRef: RefObject<HTMLElement>;
  inputRef?: RefObject<HTMLInputElement>;
  state: SliderState;
}

export function SliderThumb(props: SliderThumbProps) {
  let { inputRef, state } = props;
  let backupRef = useRef<HTMLInputElement>(null);
  inputRef = inputRef || backupRef;

  let { thumbProps, inputProps, isDragging, isFocused } = useSliderThumb(
    {
      ...props,
      inputRef,
    },
    state
  );

  let { hoverProps, isHovered } = useHover({});

  return (
    <FocusRing within focusRingClass={'is-focused'}>
      <div
        className={classNames('ac-slider-handle', {
          'is-hovered': isHovered,
          'is-dragged': isDragging,
          'is-tophandle': isFocused,
        })}
        {...mergeProps(thumbProps, hoverProps)}
        role="presentation"
        css={handleCSS}
      >
        <VisuallyHidden>
          <input
            className={classNames('ac-slider-input')}
            ref={inputRef}
            {...inputProps}
          />
        </VisuallyHidden>
      </div>
    </FocusRing>
  );
}

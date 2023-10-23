import { css } from '@emotion/react';
import theme from '../theme';

export const switchCSS = css`
  --ac-switch-label-color-disabled: ${theme.textColors.white50};

  --ac-switch-background-color: var(--ac-global-color-grey-300);
  --ac-switch-background-color-disabled: var(--ac-global-color-grey-300);
  --ac-switch-background-color-selected: var(--ac-global-color-primary);

  --ac-switch-handle-background-color: white;
  --ac-switch-handle-background-color-selected: ${theme.colors.arizeLightBlue};

  --ac-switch-min-height: 30px;
  --ac-switch-rail-width: 34px;
  --ac-switch-rail-height: 14px;
  --ac-switch-handle-size: 20px;
  --ac-switch-halo-size: 28px;
  --ac-switch-control-label-spacing: ${theme.spacing.margin8}px;
  --ac-switch-spacing-top-to-control: 10px;
  --ac-switch-spacing-top-to-label: 3px;
  --ac-switch-spacing-label-to-handle: ${theme.spacing.margin8}px;

  --ac-switch-font-size: ${theme.typography.sizes.medium.fontSize}px;

  &.ac-switch {
    display: inline-flex;
    align-items: flex-start;
    position: relative;
    min-block-size: ${theme.typography.sizes.medium.lineHeight}px;
    max-inline-size: 100%;
    vertical-align: top;
  }

  &.ac-switch--label-placement-start {
    flex-direction: row-reverse;
    gap: var(--ac-switch-spacing-label-to-handle);
  }

  &.ac-switch--label-placement-end {
    flex-direction: row;
    gap: var(--ac-switch-spacing-label-to-handle);
  }

  &.is-disabled {
    opacity: ${theme.opacity.disabled};
    .ac-switch-input {
      cursor: not-allowed;
    }
  }

  &.is-hovered,
  &.is-selected {
    &:after {
      background-color: var(--ac-switch-handle-background-color-selected);
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }
  }

  .ac-switch-element {
    display: inline-block;
    box-sizing: border-box;

    /* positions the pseudo elements relative to this one */
    position: relative;
    inline-size: var(--ac-switch-rail-width);
    /* Fix vertical alignment when not wrapping since we're flex-start */
    margin-block: calc(
      var(--ac-switch-min-height) - var(--ac-switch-rail-height) -
        var(--ac-switch-spacing-top-to-control)
    );
    margin-inline: 0;
    flex-grow: 0;
    flex-shrink: 0;
    vertical-align: middle;
    transition: background 100ms ease-in-out, border 100ms ease-in-out;
    block-size: var(--ac-switch-rail-height);
    inset-inline-start: 0;
    inset-inline-end: 0;
    border-radius: calc(var(--ac-switch-rail-height) / 2);
    background-color: var(--ac-switch-background-color);

    /* :before is used for the handle of the switch */
    &:before {
      display: block;
      position: absolute;
      content: '';
      box-sizing: border-box;
      transition: background 100ms ease-in-out, border 100ms ease-in-out,
        transform 100ms ease-in-out, box-shadow 100ms ease-in-out;

      inline-size: var(--ac-switch-handle-size);
      block-size: var(--ac-switch-handle-size);

      inset-block-start: calc(
        -1 * (var(--ac-switch-handle-size) - var(--ac-switch-rail-height)) / 2
      );
      inset-inline-start: 0;
      border-radius: calc(var(--ac-switch-handle-size) / 2);
      background-color: var(--ac-switch-handle-background-color);
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    }

    /* :after is used for the focus halo */
    &:after {
      display: block;
      position: absolute;
      content: '';
      box-sizing: border-box;
      transition: background 100ms ease-in-out, border 100ms ease-in-out,
        transform 100ms ease-in-out, box-shadow 100ms ease-in-out;

      inline-size: var(--ac-switch-halo-size);
      block-size: var(--ac-switch-halo-size);

      inset-block-start: calc(var(--ac-switch-halo-size) / -4);
      inset-inline-start: calc(
        -1 * (var(--ac-switch-halo-size) - var(--ac-switch-handle-size)) / 2
      );
      border-radius: calc(var(--ac-switch-halo-size) / 2);
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
      background-color: var(--ac-switch-handle-background-color);
      opacity: 0;
    }
  }

  .ac-switch-input {
    /* Remove the margin for input in Firefox and Safari. */
    margin: 0;

    /* Add the correct box sizing for [type="checkbox"] in IE 10-. */
    box-sizing: border-box;

    /* Remove the padding for [type="checkbox"] in IE 10-. */
    padding: 0;

    position: absolute;
    inline-size: 100%;
    block-size: 100%;
    inset-block-start: 0;
    inset-inline-start: 0;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }

  .ac-switch-label {
    color: var(--ac-global-text-color-900);
    // margin-inline: var(--ac-switch-control-label-spacing);
    margin-block-start: var(--ac-switch-spacing-top-to-label);
    margin-block-end: 0;
    font-size: var(--ac-switch-font-size);
    line-height: ${theme.typography.sizes.medium.lineHeight}px;
    transition: color 200ms ease-in-out;
  }

  &.is-selected .ac-switch-element {
    background-color: var(--ac-switch-background-color-selected);

    &:before {
      border-color: var(--ac-switch-handle-border-color-selected);
      transform: translateX(calc(var(--ac-switch-rail-width) - 100%));
      background-color: var(--ac-switch-handle-background-color-selected);
    }
    &:after {
      border-color: var(--ac-switch-handle-border-color-selected);
      transform: translateX(calc(100% - var(--ac-switch-halo-size) / 2));
      background-color: var(--ac-switch-handle-background-color-selected);
    }
  }

  &.is-hovered .ac-switch-element {
    &:after {
      opacity: 0.4;
    }
  }
`;

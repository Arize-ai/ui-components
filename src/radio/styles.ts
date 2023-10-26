import theme from '../theme';
import { css, SerializedStyles } from '@emotion/react';
import { RadioVariant } from './types';
import { textSizeCSS } from '../content/styles';

type RadioStyleProps = {
  isSelected?: boolean;
  isDisabled?: boolean;
  noPadding?: boolean;
};

export const radioGroupLabelCSS = css`
  margin-bottom: ${theme.spacing.padding8}px;
`;

export const radioGroupCSS = ({
  isDisabled = false,
}: {
  isDisabled: boolean;
}) => css`
  color: ${isDisabled
    ? 'var(--ac-global-text-color-300)'
    : 'var(--ac-global-text-color-900)'};
  &.ac-radio-group--inline-button {
    display: inline-flex;
    flex-direction: row;
    background-color: var(--ac-global-input-field-background-color);
    border: 1px solid var(--ac-global-input-field-border-color);
    border-radius: ${theme.borderRadius.medium}px;
    overflow: hidden;
    .ac-radio + .ac-radio {
      border-left: 1px solid var(--ac-global-input-field-border-color);
    }
  }
`;

export const radioCSS = ({
  isDisabled = false,
  noPadding = false,
}: RadioStyleProps) => css`
  display: flex;
  cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

  &.orientation-vertical {
    flex-direction: column;
    &:not(:first-of-type) {
      margin-top: ${noPadding ? '0' : theme.spacing.padding8}px;
    }
  }
  &.orientation-horizontal {
    flex-direction: row;
  }
`;

export const defaultRadioCSS = () => css`
  display: flex;
`;

export const selectorRadioCSS = ({
  isSelected = false,
  isDisabled = false,
}: RadioStyleProps) => css`
  height: 50px;
  border-radius: 8px;
  border: 2px solid
    ${isSelected
      ? 'var(--ac-global-text-color-900)'
      : 'var(--ac-global-input-field-border-color)'};
  color: ${isDisabled
    ? 'var(--ac-global-text-color-300)'
    : 'var(--ac-global-text-color-900)'};
  margin-right: ${theme.spacing.padding4}px;
  padding: ${theme.spacing.padding16}px;
  ${!isDisabled &&
    !isSelected &&
    `&:hover {
    border-color: var(--ac-global-input-field-border-color-hover);
    transition: border-color 0.2s ease-in-out;
  }`};
`;

export const inlineButtonRadioCSS = () =>
  css(
    css`
      transition: all 0.2s ease-in-out;
      &.is-selected {
        background-color: var(--ac-global-button-primary-background-color);
        &:hover {
          background-color: var(
            --ac-global-button-primary-background-color-hover
          );
        }
      }
      &:not(.is-selected) {
        &:hover {
          background-color: --ac-global-input-field-background-color-hover;
        }
      }
      &[data-size='normal'] {
        padding: ${theme.spacing.padding8}px ${theme.spacing.padding16}px;
      }
      &[data-size='compact'] {
        padding: ${theme.spacing.padding4}px ${theme.spacing.padding8}px;
      }
    `,
    textSizeCSS('medium')
  );

export const getRadioCSS = (
  variant: RadioVariant
): ((props: RadioStyleProps) => SerializedStyles) => {
  switch (variant) {
    case 'default': {
      return defaultRadioCSS;
    }
    case 'selector': {
      return selectorRadioCSS;
    }
    case 'inline-button': {
      return inlineButtonRadioCSS;
    }
  }
};

export const radioButtonIconCSS = ({
  isFocusVisible = false,
  isDisabled = false,
}: {
  isFocusVisible?: boolean;
  isDisabled?: boolean;
}) => css`
  color: ${isDisabled
    ? 'var(--ac-global-text-color-300)'
    : 'var(--ac-global-text-color-900)'};
  margin-right: ${theme.spacing.padding4}px;
  ${isFocusVisible &&
    `outline: ${theme.spacing.outline.thin}px solid -webkit-focus-ring-color;`}
`;

export const radioChildrenCSS = css`
  display: flex;
  padding: 0;
  margin-top: ${theme.spacing.padding4}px;
  flex-direction: column;
`;

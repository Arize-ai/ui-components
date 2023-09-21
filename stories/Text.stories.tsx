import React from 'react';
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ColorValue, Provider, Text, TextProps } from '../src';
import { globalColors } from './constants';

const meta: Meta = {
  title: 'Text',
  component: Text,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const sizes: TextProps['textSize'][] = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
];

const colors: TextProps['color'][] = [
  'text-900',
  'text-700',
  'text-300',
  'designationPurple',
  'designationTurquoise',
  'success',
  'danger',
  'warning',
];

/**
 * A gallery of all the variants
 */
export const Gallery = () => {
  return (
    <Provider>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <p
          css={css`
            .ac-text {
              display: block;
            }
          `}
        >
          {sizes.map(size => {
            return (
              <Text key={size} textSize={size}>
                {`I will not waste chalk`}
              </Text>
            );
          })}
        </p>
        <p
          css={css`
            .ac-text {
              display: block;
            }
          `}
        >
          {sizes.map(size => {
            return (
              <Text key={size} textSize={size} weight="heavy">
                {`I will not waste chalk`}
              </Text>
            );
          })}
        </p>
        <p
          css={css`
            .ac-text {
              display: block;
            }
          `}
        >
          {colors.map(color => {
            return (
              <Text key={color} textSize="xlarge" color={color} weight="heavy">
                {`I will not waste chalk`}
              </Text>
            );
          })}
        </p>

        <p
          css={css`
            .ac-text {
              display: block;
            }
          `}
        >
          {colors.map(color => {
            return (
              <Text
                key={color}
                fontStyle="italic"
                textSize="xlarge"
                color={color}
                weight="heavy"
              >
                {`I will not waste chalk`}
              </Text>
            );
          })}
        </p>
        <h2>Global Colors</h2>
        <p
          css={css`
            .ac-text {
              display: block;
            }
          `}
        >
          {globalColors.map(color => {
            return (
              <Text key={color} textSize="xlarge" color={color} weight="heavy">
                {`I will not waste chalk`}
              </Text>
            );
          })}
        </p>
      </div>
    </Provider>
  );
};

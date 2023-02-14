import React from 'react';
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Text, TextProps } from '../src';

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
/**
 * A gallery of all the variants
 */
export const Gallery = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
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
    </div>
  );
};

import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
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

const sizes = [
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
    <div>
      <p
        css={css`
          .ac-text {
            display: block;
          }
        `}
      >
        {sizes.map(size => {
          return (
            // @ts-ignore
            <Text key={size} textSize={size}>
              {size}
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
            // @ts-ignore
            <Text key={size} textSize={size} weight="heavy">
              {size}
            </Text>
          );
        })}
      </p>
    </div>
  );
};

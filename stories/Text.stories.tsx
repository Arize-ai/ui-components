import React from 'react';
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ColorValue, Provider, Text, TextProps } from '../src';

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
  'white30',
  'white70',
  'white90',
  'designationPurple',
  'designationTurquoise',
  'success',
  'danger',
  'warning',
];

const globalColors: ColorValue[] = [
  'gray-100',
  'gray-200',
  'gray-300',
  'gray-400',
  'gray-500',
  'gray-600',
  'gray-700',
  'gray-800',
  'gray-900',
  'blue-100',
  'blue-200',
  'blue-300',
  'blue-400',
  'blue-500',
  'blue-600',
  'blue-700',
  'blue-800',
  'blue-900',
  'blue-1000',
  'blue-1100',
  'blue-1200',
  'red-100',
  'red-200',
  'red-300',
  'red-400',
  'red-500',
  'red-600',
  'red-700',
  'red-800',
  'red-900',
  'red-1000',
  'red-1100',
  'red-1200',
  'red-1300',
  'red-1400',
  'orange-100',
  'orange-200',
  'orange-300',
  'orange-400',
  'orange-500',
  'orange-600',
  'orange-700',
  'orange-800',
  'orange-900',
  'yellow-100',
  'yellow-200',
  'yellow-300',
  'yellow-400',
  'yellow-500',
  'yellow-600',
  'yellow-700',
  'yellow-800',
  'yellow-900',
  'yellow-1000',
  'yellow-1100',
  'yellow-1200',
  'yellow-1300',
  'yellow-1400',
  'green-100',
  'green-200',
  'green-300',
  'green-400',
  'green-500',
  'green-600',
  'green-700',
  'green-800',
  'green-900',
  'green-1000',
  'green-1100',
  'green-1200',
  'green-1300',
  'green-1400',
  'celery-100',
  'celery-200',
  'celery-300',
  'celery-400',
  'celery-500',
  'celery-600',
  'celery-700',
  'celery-800',
  'celery-900',
  'celery-1000',
  'celery-1100',
  'celery-1200',
  'celery-1300',
  'celery-1400',
  'seafoam-100',
  'seafoam-200',
  'seafoam-300',
  'seafoam-400',
  'seafoam-500',
  'seafoam-600',
  'seafoam-700',
  'seafoam-800',
  'seafoam-900',
  'seafoam-1000',
  'seafoam-1100',
  'seafoam-1200',
  'seafoam-1300',
  'seafoam-1400',
  'cyan-100',
  'cyan-200',
  'cyan-300',
  'cyan-400',
  'cyan-500',
  'cyan-600',
  'cyan-700',
  'cyan-800',
  'cyan-900',
  'cyan-1000',
  'cyan-1100',
  'cyan-1200',
  'cyan-1300',
  'cyan-1400',
  'indigo-100',
  'indigo-200',
  'indigo-300',
  'indigo-400',
  'indigo-500',
  'indigo-600',
  'indigo-700',
  'indigo-800',
  'indigo-900',
  'indigo-1000',
  'indigo-1100',
  'indigo-1200',
  'indigo-1300',
  'indigo-1400',
  'purple-100',
  'purple-200',
  'purple-300',
  'purple-400',
  'purple-500',
  'purple-600',
  'purple-700',
  'purple-800',
  'purple-900',
  'purple-1000',
  'purple-1100',
  'purple-1200',
  'purple-1300',
  'purple-1400',
  'fuchsia-100',
  'fuchsia-200',
  'fuchsia-300',
  'fuchsia-400',
  'fuchsia-500',
  'fuchsia-600',
  'fuchsia-700',
  'fuchsia-800',
  'fuchsia-900',
  'fuchsia-1000',
  'fuchsia-1100',
  'fuchsia-1200',
  'fuchsia-1300',
  'fuchsia-1400',
  'magenta-100',
  'magenta-200',
  'magenta-300',
  'magenta-400',
  'magenta-500',
  'magenta-600',
  'magenta-700',
  'magenta-800',
  'magenta-900',
  'magenta-1000',
  'magenta-1100',
  'magenta-1200',
  'magenta-1300',
  'magenta-1400',
  'chartreuse-100',
  'chartreuse-200',
  'chartreuse-300',
  'chartreuse-400',
  'chartreuse-500',
  'chartreuse-600',
  'chartreuse-700',
  'chartreuse-800',
  'chartreuse-900',
  'chartreuse-1000',
  'chartreuse-1100',
  'chartreuse-1200',
  'chartreuse-1300',
  'chartreuse-1400',
  'orange-100',
  'orange-200',
  'orange-300',
  'orange-400',
  'orange-500',
  'orange-600',
  'orange-700',
  'orange-800',
  'orange-900',
  'orange-1000',
  'orange-1100',
  'orange-1200',
  'orange-1300',
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

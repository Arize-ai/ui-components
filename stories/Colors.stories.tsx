import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';

import { css } from '@emotion/react';
import {
  theme,
  designationColors,
  colorPalette,
  Text,
  Heading,
  TooltipTrigger,
  Tooltip,
  TriggerWrap,
} from '../src';
// @ts-ignore
import { colorValue } from '../src/utils';
import { globalColors } from './constants';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

const listStyle: CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  color: 'rgb(153,153,153)',
  display: 'flex',
  width: 1000,
  flexWrap: 'wrap',
  gap: '8px',
};

function GlobalColor({ color }) {
  const val = colorValue(color);
  return <Color color={val} name={color} />;
}

function Color({ color, name }) {
  return (
    <div
      style={{
        marginBottom: '5px',
        marginTop: '5px',
        display: 'flex',
        flexDirection: 'column',
        width: '60px',
        overflow: 'hidden',
      }}
    >
      <TooltipTrigger>
        <TriggerWrap>
          <div
            style={{
              backgroundColor: color,
              width: '60px',
              height: '60px',
              marginRight: '4px',
              borderRadius: 3,
            }}
          />
        </TriggerWrap>
        <Tooltip>{color}</Tooltip>
      </TooltipTrigger>
      <Text textSize="xsmall">{name}</Text>
    </div>
  );
}

function ColorGradient({ colorGradient }) {
  console.log(colorGradient);
  return (
    <div
      style={{
        marginBottom: '5px',
        marginTop: '5px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <ul css={listStyle}>
        {Object.keys(colorGradient).map((color, i) => (
          <li key={i}>
            <Color color={colorGradient[color]} name={color} />
          </li>
        ))}
      </ul>
    </div>
  );
}
function Colors() {
  const colors = theme.colors;
  const colorsArray: JSX.Element[] = [];

  Object.keys(theme.colors).forEach(name => {
    if (theme.colors[name]) {
      colorsArray.push(<Color color={theme.colors[name]} name={name} />);
    }
  });

  const designationColorKeys = Object.keys(designationColors);
  const designations = (
    <section>
      <Heading>Designation Colors</Heading>
      <ul style={listStyle}>
        {Object.keys(designationColors)
          .filter(c => c.startsWith('designation'))
          .map((c, i) => (
            <li key={i}>
              <Color color={designationColors[c]} name={c} />
            </li>
          ))}
      </ul>
    </section>
  );

  const colorPaletteSection = (
    <section>
      <Heading>Color Palette</Heading>
      <ColorGradient colorGradient={colorPalette.purpleColors} />
      <ColorGradient colorGradient={colorPalette.turquoiseColors} />
      <ColorGradient colorGradient={colorPalette.grayColors} />
    </section>
  );

  const globalColorsEl = (
    <section>
      <Heading>Global Colors</Heading>
      <ul style={listStyle}>
        {globalColors.map((c, i) => {
          return (
            <>
              {c.endsWith('-100') && (
                <div
                  css={css`
                    width: 100%;
                  `}
                />
              )}
              <li key={i}>
                <GlobalColor color={c} />
              </li>
            </>
          );
        })}
      </ul>
    </section>
  );

  return (
    <ThemeToggleWrap>
      <main>
        <ul style={listStyle}>
          {colorsArray.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <br />
        {designations}
        {globalColorsEl}
        {colorPaletteSection}
      </main>
    </ThemeToggleWrap>
  );
}

const meta: Meta = {
  title: 'Colors',
  component: Colors,

  parameters: {},
};

export default meta;

const Template: Story = args => <Colors />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

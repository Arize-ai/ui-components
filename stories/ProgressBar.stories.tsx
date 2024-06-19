import React, { CSSProperties } from 'react';
import { css } from '@emotion/react';
import { ProgressBar, Provider } from '../src';

const formatOptions = {
  style: 'currency',
  currency: 'JPY',
};

const grayedBoxStyle: CSSProperties = {
  width: '250px',
  height: '60px',
  backgroundColor: 'rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'ProgressBar',
  providerSwitcher: { status: 'positive' },
  args: { value: 32 },
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
};

export const Default = args => render(args);
export const Value50 = () => render({ value: 50 });

Value50.story = {
  name: 'value: 50',
};

export const Value100 = () => render({ value: 100 });

Value100.story = {
  name: 'value: 100',
};

export const SizeS = args => render({ size: 'S', ...args });

SizeS.story = {
  name: 'size: S',
};

export const ShowValueLabelTrue = args =>
  render({ showValueLabel: true, ...args });

ShowValueLabelTrue.story = {
  name: 'showValueLabel: true',
};

export const ShowValueLabelFalse = args =>
  render({ showValueLabel: false, ...args });

ShowValueLabelFalse.story = {
  name: 'showValueLabel: false',
};

export const ValueLabel1Of4 = () => render({ value: 25, valueLabel: '1 of 4' });

ValueLabel1Of4.story = {
  name: 'valueLabel: 1 of 4',
};

export const UsingNumberFormatOptionsWithCurrencyStyle = args =>
  render({
    ...args,
    showValueLabel: true,
    formatOptions,
  });

UsingNumberFormatOptionsWithCurrencyStyle.story = {
  name: 'Using number formatOptions with currency style',
};

export const NoVisibleLabel = args =>
  render({ label: null, 'aria-label': 'Loading…', ...args });

NoVisibleLabel.story = {
  name: 'no visible label',
};

export const LabelPositionSide = args =>
  render({ labelPosition: 'side', ...args });

LabelPositionSide.story = {
  name: 'labelPosition: side',
};

export const LabelPositionTop = args =>
  render({ labelPosition: 'top', ...args });

LabelPositionTop.story = {
  name: 'labelPosition: top',
};

export const LongLabel = args =>
  render({
    label: 'Super long progress bar label. Sample label copy. Loading...',
    ...args,
  });

LongLabel.story = {
  name: 'long label',
};

export const LongLabelLabelPositionSide = args =>
  render({
    labelPosition: 'side',
    label: 'Super long progress bar label. Sample label copy. Loading...',
    ...args,
  });

LongLabelLabelPositionSide.story = {
  name: 'long label, labelPosition: side',
};

export const IsIndeterminateTrue = args =>
  render({ isIndeterminate: true, ...args });

IsIndeterminateTrue.story = {
  name: 'isIndeterminate: true',
};

export const IsIndeterminateTrueSizeS = () =>
  render({ isIndeterminate: true, size: 'S' });

IsIndeterminateTrueSizeS.story = {
  name: 'isIndeterminate: true, size: S',
};

export const VariantOverBackground = args => (
  <div style={grayedBoxStyle}>
    {render({ variant: 'overBackground', ...args })}
  </div>
);

VariantOverBackground.story = {
  name: 'variant: overBackground',
};

export const StaticColorWhite = args => (
  <div style={grayedBoxStyle}>{render({ staticColor: 'white', ...args })}</div>
);

export const CustomColor = args => (
  <div
    style={grayedBoxStyle}
    css={css`
      --mod-barloader-fill-color: red;
    `}
  >
    {render({ ...args, width: '30px' })}
  </div>
);

StaticColorWhite.story = {
  name: 'staticColor: white',
};

export const StaticColorBlack = args => (
  <div style={{ ...grayedBoxStyle, backgroundColor: 'rgb(206, 247, 243)' }}>
    {render({ staticColor: 'black', ...args })}
  </div>
);

StaticColorBlack.story = {
  name: 'staticColor: black',
};

export const ParentWidth100 = () => (
  <span style={{ width: '100%' }}>{render()}</span>
);

ParentWidth100.story = {
  name: 'parent width 100%',
};

export const ParentWidth100Px = () => (
  <span style={{ width: '100px' }}>{render()}</span>
);

ParentWidth100Px.story = {
  name: 'parent width 100px',
};

export const Width300Px = () => render({ width: '300px', value: 100 });

Width300Px.story = {
  name: 'width: 300px',
};

export const Width300PxIsIndeterminateTrue = () =>
  render({ width: '300px', isIndeterminate: true });

Width300PxIsIndeterminateTrue.story = {
  name: 'width: 300px, isIndeterminate: true',
};

export const Width300PxLabelPositionSide = () =>
  render({ width: '300px', labelPosition: 'side' });

Width300PxLabelPositionSide.story = {
  name: 'width: 300px, labelPosition: side',
};

export const Width300PxLabelPositionSideIsIndeterminateTrue = () =>
  render({ width: '300px', labelPosition: 'side', isIndeterminate: true });

Width300PxLabelPositionSideIsIndeterminateTrue.story = {
  name: 'width: 300px, labelPosition: side, isIndeterminate: true',
};

export const Width30Px = () => render({ width: '30px' });

Width30Px.story = {
  name: 'width: 30px',
};

export const Width30PxSizeS = () => render({ width: '30px', size: 'S' });

Width30PxSizeS.story = {
  name: 'width: 30px, size: S',
};

export const Width30PxLabelPositionSideLongLabel = () =>
  render({
    width: '30px',
    labelPosition: 'side',
    label: 'Super long progress bar label. Sample label copy. Loading...',
  });

Width30PxLabelPositionSideLongLabel.story = {
  name: 'width: 30px, labelPosition: side, long label',
};

export const Width30PxLabelPositionSideIsIndeterminateTrueLongLabelButtonOnRight = () => (
  <>
    {render({
      width: '30px',
      labelPosition: 'side',
      isIndeterminate: true,
      label: 'Super long progress bar label. Sample label copy. Loading...',
    })}
    <button>Confirm</button>
  </>
);

Width30PxLabelPositionSideIsIndeterminateTrueLongLabelButtonOnRight.story = {
  name:
    'width: 30px, labelPosition: side, isIndeterminate: true, long label, button on right',
};

export const UsingRawValuesForMinValueMaxValueAndValue = () =>
  render({
    showValueLabel: true,
    labelPosition: 'top',
    maxValue: 2147483648,
    value: 715827883,
  });

UsingRawValuesForMinValueMaxValueAndValue.story = {
  name: 'Using raw values for minValue, maxValue, and value',
};

export const UsingRawValuesWithNumberFormatter = () =>
  render({
    showValueLabel: true,
    labelPosition: 'top',
    maxValue: 2147483648,
    value: 715827883,
    formatOptions,
  });

UsingRawValuesWithNumberFormatter.story = {
  name: 'Using raw values with number formatter',
};

function render(props: any = {}) {
  return (
    <Provider>
      <ProgressBar label="Loading…" {...props} />
    </Provider>
  );
}

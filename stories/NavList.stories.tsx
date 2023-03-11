import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { Text, NavList, Item, NavListProps, Section, Button } from '../src';

const meta: Meta = {
  title: 'NavList',
  component: NavList,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavListProps<string>> = args => {
  const [selection, setSelection] = useState('all_monitors');
  return (
    <main
      css={css`
        display: flex;
        flex-direction: row;
        .ac-nav-list {
          width: 300px;
          flex: none;
        }
      `}
    >
      <NavList
        aria-label="navigation"
        defaultSelectedKey={'all_monitors'}
        onSelectionChange={s => {
          setSelection(s.toString());
        }}
      >
        <Item key="all_monitors">All Monitors</Item>
        <Item key="presets">Monitor Presets</Item>
        <Item key="managed">Managed Monitors</Item>
      </NavList>
      <div style={{ margin: 24 }}>
        {selection +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra semper magna id iaculis. Proin blandit leo vel quam porta, quis feugiat lorem facilisis. Pellentesque in odio non mauris suscipit imperdiet sit amet nec turpis. Sed volutpat massa ut odio porta, nec sodales quam viverra. Duis ornare, nunc quis venenatis facilisis, nibh elit dictum nunc, quis elementum arcu nisi id est. Vivamus sit amet imperdiet ipsum, non efficitur ex. Fusce sit amet tincidunt quam. Vivamus fringilla rhoncus risus non vehicula. Cras et rhoncus enim, in tincidunt magna. Aliquam tincidunt nunc ut massa vestibulum luctus. Nullam facilisis aliquet eleifend. Quisque aliquet nunc in eros tempus, quis malesuada nibh commodo. Cras porttitor sagittis venenatis.'}
      </div>
    </main>
  );
};

export const Controlled: Story<NavListProps<string>> = args => {
  const [selection, setSelection] = useState('all_monitors');
  return (
    <main
      css={css`
        display: flex;
        flex-direction: row;
        .ac-nav-list {
          width: 300px;
          flex: none;
        }
      `}
    >
      <NavList
        aria-label="navigation"
        selectedKeys={[selection]}
        onSelectionChange={s => {
          setSelection(s.toString());
        }}
      >
        <Item key="all_monitors">All Monitors</Item>
        <Item key="presets">Monitor Presets</Item>
        <Item key="managed">Managed Monitors</Item>
      </NavList>
      <div style={{ margin: 24 }}>
        <Text>{`Selected tab: ${selection}`}</Text>
        <Button variant="primary" onClick={() => setSelection('presets')}>
          Go to presets
        </Button>
      </div>
    </main>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

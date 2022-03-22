import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion, AccordionProps, AccordionItem, Card } from '../src';
import { withDesign } from 'storybook-addon-designs';
import InfoTip from './components/InfoTip';

const meta: Meta = {
  title: 'Accordion',
  component: Accordion,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=243%3A0',
    },
  },
};

const AccordionContents = () => (
  <p style={{ padding: 16, margin: 10 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </p>
);

export default meta;

const Template: Story<AccordionProps> = args => (
  <Card
    title="Model Health"
    subTitle={'An overview of the the health of your model'}
    bodyStyle={{ padding: 0, overflow: 'hidden' }}
    style={{ width: 700 }}
  >
    <Accordion>
      <AccordionItem
        title="2 Predictions"
        titleExtra={<InfoTip>Description of predictions</InfoTip>}
        id="predictions"
      >
        <AccordionContents />
      </AccordionItem>
      <AccordionItem title="100 Features" id="features">
        <AccordionContents />
      </AccordionItem>
      <AccordionItem title="10 Actuals" id="actuals">
        <AccordionContents />
      </AccordionItem>
    </Accordion>
  </Card>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

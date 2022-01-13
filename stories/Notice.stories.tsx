import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { Provider, Notice } from '../src';
import { withDesign } from 'storybook-addon-designs';

const meta: Meta = {
  title: 'Notice',
  component: Notice,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=554%3A1721',
    },
  },
};

export default meta;

const Template: Story<any> = args => {
  return (
    <Provider>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          & > div {
            display: flex;
            flex-direction: column;
            .ac-notice {
              margin: 8px;
            }
          }
        `}
      >
        <div>
          <Notice
            variant="info"
            title="New model available"
            message="We see a new model is available. Please go and set up your model's baseline"
            onClose={() => {}}
            action={{
              text: 'Set up baseline',
              onClick: () => {},
            }}
          />
          <Notice
            variant="danger"
            title="Could not apply changes"
            message="Uh oh! We could not apply your schema changes"
            onClose={() => {}}
            action={{
              text: 'Try Again',
              onClick: () => {},
            }}
          />
          <Notice
            variant="success"
            title="Changes applied successfully"
            message="These changes affect 5 of your models."
            onClose={() => {}}
            action={{
              text: 'Hooray!',
              onClick: () => {},
            }}
          />
          <Notice
            variant="warning"
            title="We detected an issue"
            message="Your changes were applied but raised some issues."
            onClose={() => {}}
            action={{
              text: 'Check issues',
              onClick: () => {},
            }}
          />
        </div>
        <div>
          <Notice
            variant="info"
            title="New model available"
            message="We see a new model is available. Please go and set up your model's baseline"
            onClose={() => {}}
          />
          <Notice
            variant="danger"
            title="Could not apply changes"
            message="Uh oh! We could not apply your schema changes"
            onClose={() => {}}
          />
          <Notice
            variant="success"
            title="Changes applied successfully"
            message="These changes affect 5 of your models."
            onClose={() => {}}
          />
          <Notice
            variant="warning"
            title="We detected an issue"
            message="Your changes were applied but raised some issues."
            onClose={() => {}}
          />
        </div>
        <div>
          <Notice
            variant="info"
            title="New model available"
            onClose={() => {}}
            action={{
              text: 'Set up baseline',
              onClick: () => {},
            }}
          />
          <Notice
            variant="danger"
            title="Could not apply changes"
            onClose={() => {}}
            action={{
              text: 'Try Again',
              onClick: () => {},
            }}
          />
          <Notice
            variant="success"
            title="Changes applied successfully"
            onClose={() => {}}
            action={{
              text: 'Hooray!',
              onClick: () => {},
            }}
          />
          <Notice
            variant="warning"
            title="We detected an issue"
            onClose={() => {}}
            action={{
              text: 'Check issues',
              onClick: () => {},
            }}
          />
        </div>
        <div>
          <Notice
            variant="info"
            title="New model available"
            onClose={() => {}}
          />
          <Notice
            variant="danger"
            title="Could not apply changes"
            onClose={() => {}}
          />
          <Notice
            variant="success"
            title="Changes applied successfully"
            onClose={() => {}}
          />
          <Notice
            variant="warning"
            title="We detected an issue"
            onClose={() => {}}
          />
        </div>
      </div>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

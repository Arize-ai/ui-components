import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { Provider, useNotification, SeverityLevel } from '../src';
import { withDesign } from 'storybook-addon-designs';

const meta: Meta = {
  title: 'Notification',
  component: null,
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
const variantsList: SeverityLevel[] = ['info', 'success', 'warning', 'danger'];

const Template: Story<any> = args => {
  const [notice, holder] = useNotification();
  return (
    <Provider>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 200px;
          button {
            margin: 8px;
          }
        `}
      >
        {variantsList.map(variant => (
          <button
            onClick={() => {
              notice({
                variant,
                title: variant,
                message: `${variant} message goes here`,
              });
            }}
          >
            {`Notify ${variant}`}
          </button>
        ))}
        <br />
        <button
          onClick={() => {
            notice({
              variant: 'warning',
              title: 'Waning',
              message: "Can I suggest you don't use this?",
              action: {
                text: 'Try This',
                onClick: () => {
                  alert('Done');
                },
              },
            });
          }}
        >
          Call To Action
        </button>
        <button
          onClick={() => {
            notice({
              variant: 'info',
              message: 'The time is now: ' + new Date().toLocaleTimeString(),
              title: 'Time',
            });
          }}
        >
          Notify Time
        </button>
      </div>
      {holder}
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const WithCustomStyle = () => {
  const [notice, holder] = useNotification({
    style: { bottom: 100, right: 30 },
  });
  return (
    <Provider>
      <button
        onClick={() => {
          notice({
            // @ts-ignore
            variant: ['info', 'success', 'warning', 'danger'][
              Math.floor(Math.random() * 4)
            ],
            title: 'Clicked',
            message: 'Do you see this?',
            action: {
              text: 'Try This',
              onClick: () => {
                alert('Done');
              },
            },
          });
        }}
      >
        Click Me
      </button>
      {holder}
    </Provider>
  );
};

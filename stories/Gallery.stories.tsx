import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import {
  Alert,
  Card,
  useNotification,
  Button,
  Text,
  TextField,
  Dropdown,
  Provider,
  Field,
  RadioGroup,
  Radio,
} from '../src';
import { Icon, SearchOutline } from '../src/icon';
// @ts-ignore
import chartFile from './images/chart.png';

const meta: Meta = {
  title: 'Gallery',
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=1398%3A4061',
    },
  },
};

export default meta;

const Template: Story = args => {
  const [notify, holder] = useNotification();
  return (
    <Provider>
      <div
        css={css`
          .ac-card + .ac-card {
            margin-top: 16px;
          }
        `}
      >
        <Card
          title="Prediction Volume"
          bodyStyle={{ padding: 0 }}
          extra={
            <div
              css={css`
                display: flex;
                flex-direction: row;
                & > * + * {
                  margin-left: 8px;
                }
              `}
            >
              <Button
                variant="default"
                onClick={() => {
                  notify({
                    // @ts-ignore
                    variant: ['info', 'success', 'warning', 'danger'][
                      Math.floor(Math.random() * 4)
                    ],
                    title: 'Awesome!',
                    message: 'Things worked as expected',
                    action: {
                      text: 'Try This',
                      onClick: () => {},
                    },
                  });
                }}
              >
                Notify
              </Button>
              <Button
                variant="default"
                icon={<Icon svg={<SearchOutline />} />}
              />
              <TextField></TextField>
            </div>
          }
        >
          <div
            css={css`
              position: relative;
              .ac-alert {
                position: absolute;
                left: 0;
                right: 0;
              }
            `}
          >
            <Alert variant="info" banner title="Heads up">
              Your predictions may be delayed by up to 10 minutes
            </Alert>

            <img
              src={chartFile}
              alt="chart image"
              css={css`
                margin: 24px;
              `}
            />
          </div>
        </Card>
        <Card title="Example Form">
          <div
            css={css`
              display: flex;
              align-items: flex-end;
              flex-direction: row;
              .ac-field {
                margin-right: 8px;
              }
              .email-textfield {
                flex: 1 1 auto;
                .ac-textfield {
                  width: 100%;
                }
              }
              .ac-button {
                margin-left: 8px;
              }
            `}
          >
            <TextField label="name" placeholder="enter your name" />
            <TextField
              label="email"
              addonBefore="mail"
              placeholder="enter your email"
              className="email-textfield"
            />
            <Field label="Perform action">
              <Dropdown menu={<div>Hello</div>}>Action</Dropdown>
            </Field>
            <Field label="animal">
              <RadioGroup variant="inline-button" defaultValue={'dogs'}>
                <Radio value="dogs" label="Dogs">
                  Dogs
                </Radio>
                ,
                <Radio value="cats" label="Cats">
                  Cats
                </Radio>
                ,
              </RadioGroup>
            </Field>
            <Button variant="primary">Submit</Button>
          </div>
        </Card>
        {holder}
      </div>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

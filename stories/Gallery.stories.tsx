import React, { PropsWithChildren, useState } from 'react';
import { css } from '@emotion/react';
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
  ButtonToolbar,
  View,
  Heading,
  ButtonGroup,
  Flex,
  Switch,
} from '../src';
import { Icon, Icons, SearchOutline } from '../src/icon';
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

function ThemeToggleWrapper({ children }: PropsWithChildren) {
  const [isLight, setIsLight] = useState(false);
  return (
    <>
      <button onClick={() => setIsLight(!isLight)}>Toggle Theme</button>
      <Provider theme={isLight ? 'light' : 'dark'}>
        <h1>Dark Theme</h1>
        {children}
      </Provider>
    </>
  );
}

export function OverviewPage() {
  return (
    <ThemeToggleWrapper>
      <View padding="size-100">
        <Flex direction="row" gap="size-100">
          <View
            borderColor="light"
            height="size-1200"
            borderWidth="thin"
            flex="1 1 auto"
            borderRadius="medium"
          />
          <View width="300px" flex="none">
            <Card collapsible title="Setup Your Model" variant="compact">
              Monitors go here
            </Card>
          </View>
        </Flex>
      </View>
    </ThemeToggleWrapper>
  );
}

export function Gallery() {
  const [notify, holder] = useNotification();
  return (
    <ThemeToggleWrapper>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 8px;
        `}
      >
        <Card
          title="Prediction Volume"
          variant="compact"
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
              <ButtonToolbar>
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
              </ButtonToolbar>
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
        <Card
          title="Example Form"
          variant="compact"
          extra={<Switch name="Toggle" />}
        >
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
        <View
          backgroundColor="dark"
          padding="static-size-200"
          borderRadius="medium"
          borderColor="dark"
        >
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <Heading level={3}>Drift Over Time</Heading>
            <ButtonGroup aria-label="zoom control">
              <Button
                variant="default"
                icon={<Icon svg={<Icons.ArrowIosBackOutline />} />}
                size="compact"
              />
              <Button
                variant="default"
                icon={<Icon svg={<Icons.PlusCircleOutline />} />}
                size="compact"
              />
              <Button
                variant="default"
                icon={<Icon svg={<Icons.PlusCircleOutline />} />}
                size="compact"
              />
              <Button
                variant="default"
                icon={<Icon svg={<Icons.ArrowIosForwardOutline />} />}
                size="compact"
              />
            </ButtonGroup>
          </div>
          <img
            src={chartFile}
            alt="chart image"
            css={css`
              margin: 24px;
            `}
          />
        </View>
        <View
          backgroundColor="dark"
          borderWidth="thin"
          borderRadius="medium"
          borderColor="dark"
        >
          <Flex direction="row">
            <View flex>
              <img
                src={chartFile}
                alt="chart image"
                css={css`
                  margin: 24px;
                `}
              />
            </View>
            <View
              width="size-2400"
              backgroundColor="gray-800"
              borderColor="dark"
              borderLeftWidth="thin"
            >
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap={'size-100'}
                height="100%"
              >
                <Heading>Statistic</Heading>
                <Text textSize="xxlarge">437</Text>
              </Flex>
            </View>
          </Flex>
        </View>
        {holder}
      </div>
    </ThemeToggleWrapper>
  );
}

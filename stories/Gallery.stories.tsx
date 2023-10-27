import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import React, { Children, PropsWithChildren, useState } from 'react';
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
  Counter,
  ActionTooltip,
  Content,
  ListItem,
  List,
  TabbedCard,
  Tabs,
  TabPane,
  Accordion,
  AccordionItem,
  CompactSearchField,
} from '../src';
import { Icon, Icons, SearchOutline, Settings } from '../src/icon';
// @ts-ignore
import chartFile from './images/chart.png';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';
import InfoTip from './components/InfoTip';
import { ThemeSplitView } from './components/ThemeSplitView';

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

function ZoomControls() {
  return (
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
  );
}

function MainLane(props: PropsWithChildren) {
  return (
    <View flex="1 1 auto">
      <Flex direction="column" gap="size-100">
        {props.children}
      </Flex>
    </View>
  );
}

function AsideLane(props: PropsWithChildren) {
  return (
    <View flex="none" width="500px">
      <Flex direction="column" gap="size-100">
        {props.children}
      </Flex>
    </View>
  );
}

export function OverviewPage() {
  return (
    <ThemeSplitView>
      <View padding="size-100">
        <Flex direction="row" gap="size-100">
          <MainLane>
            <Card
              title="Performance Over Time"
              variant="compact"
              extra={<ZoomControls />}
            >
              <Flex direction="row">
                <View flex="1 1 auto">
                  <img
                    src={chartFile}
                    css={css`
                      width: 100%;
                      flex: 1 1 auto;
                    `}
                  />
                </View>
                <View flex="none" width="100px">
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <Text textSize="xxlarge">0.0</Text>
                    <Heading>Metric</Heading>
                  </Flex>
                </View>
              </Flex>
            </Card>
            <ModelSchemaCard />
          </MainLane>
          <AsideLane>
            <Card
              collapsible
              title="Setup Your Model"
              variant="compact"
              bodyStyle={{ padding: 0 }}
            >
              <List>
                <ListItem>
                  <Flex direction="row" gap="size-100" alignItems="center">
                    <Icon svg={<Icons.AlertCircleOutline />} color="warning" />
                    <Flex direction="column">
                      <Heading level={3}>Send in Production Data</Heading>
                      <Text textSize="medium">
                        Make sure your models in production are working the way
                        you intended
                      </Text>
                    </Flex>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex direction="row" alignItems="center" gap="size-100">
                    <Icon
                      svg={<Icons.CheckmarkCircleOutline />}
                      color="success"
                    />
                    <Flex direction="column">
                      <Heading level={3}>Setup Monitoring</Heading>
                      <Text textSize="medium">
                        Receive alerts when your model experiences drift, data
                        quality, and performance degradations.
                      </Text>
                    </Flex>
                  </Flex>
                </ListItem>
              </List>
            </Card>
            <MonitorsListingCard />
            <ModelBaseline />
          </AsideLane>
        </Flex>
      </View>
    </ThemeSplitView>
  );
}

function AccordionDimensions() {
  return (
    <Accordion>
      <AccordionItem
        title="Predictions"
        id="model-health-predictions"
        defaultIsOpen={false}
      >
        Prediction Details
      </AccordionItem>
      <AccordionItem
        title="Actuals"
        id="model-health-actual"
        defaultIsOpen={false}
      >
        Actuals Details
      </AccordionItem>
      <AccordionItem
        title="Features"
        id="model-health-features"
        defaultIsOpen={false}
      >
        Feature Details
      </AccordionItem>
    </Accordion>
  );
}

function ModelSchemaCard() {
  return (
    <TabbedCard title="Model Schema" extra={<CompactSearchField />}>
      <Tabs>
        <TabPane name="All">
          <AccordionDimensions />
        </TabPane>
        <TabPane name="Features">
          <AccordionDimensions />
        </TabPane>
        <TabPane name="Embeddings">
          <AccordionDimensions />
        </TabPane>
        <TabPane name="Tags">
          <AccordionDimensions />
        </TabPane>
        <TabPane name="Predictions">
          <AccordionDimensions />
        </TabPane>
        <TabPane name="Actuals">
          <AccordionDimensions />
        </TabPane>
      </Tabs>
    </TabbedCard>
  );
}

function MonitorsListingCard() {
  return (
    <Card
      title="Monitors"
      variant="compact"
      titleExtra={<InfoTip>toolstip stuff</InfoTip>}
      bodyStyle={{ padding: 0 }}
    >
      <List>
        <ListItem>
          <Flex direction="row" alignItems="center" gap="size-100">
            <Icon svg={<Icons.CheckmarkCircleOutline />} />
            <Heading>Drift</Heading>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex direction="row" alignItems="center" gap="size-100">
            <Icon svg={<Icons.CheckmarkCircleOutline />} />
            <Heading>Data Quality</Heading>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex direction="row" alignItems="center" gap="size-100">
            <Icon svg={<Icons.CheckmarkCircleOutline />} />
            <Heading>Performance</Heading>
          </Flex>
        </ListItem>
      </List>
    </Card>
  );
}

function ModelBaseline() {
  return (
    <Card
      title="Model Baseline"
      variant="compact"
      titleExtra={<InfoTip>tooltips stuff</InfoTip>}
    >
      baseline info
    </Card>
  );
}

export function Gallery() {
  const [notify, holder] = useNotification();
  function setSearch(e: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <ThemeToggleWrap>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 8px;
        `}
      >
        <Card
          title="Model Health"
          subTitle={'An overview of the the health of your model'}
          bodyStyle={{ padding: 0, overflow: 'hidden' }}
          collapsible
          extra={<CompactSearchField placeholder="Search..." />}
        >
          <Accordion>
            <AccordionItem
              title="2 Predictions"
              titleExtra={<InfoTip>Description of predictions</InfoTip>}
              id="predictions"
            >
              <p style={{ padding: 16, margin: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItem>
            <AccordionItem
              title="Features"
              titleExtra={<Counter variant="light">100</Counter>}
              id="features"
            >
              <p style={{ padding: 16, margin: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItem>
            <AccordionItem title="10 Actuals" id="actuals">
              <p style={{ padding: 16, margin: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItem>
          </Accordion>
        </Card>
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
          <Alert variant="info" banner title="Heads up">
            Your predictions may be delayed by up to 10 minutes
          </Alert>
          <Alert variant="danger" banner title="Heads up">
            Your predictions may be delayed by up to 10 minutes
          </Alert>
          <img
            src={chartFile}
            alt="chart image"
            css={css`
              width: 100%;
              padding: 16px;
            `}
          />
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
          borderWidth="thin"
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
              width: 100%;
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
              backgroundColor="grey-100"
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
    </ThemeToggleWrap>
  );
}

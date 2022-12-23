/** @jsx jsx */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { jsx } from '@emotion/react';
import {
  Provider,
  ActionButton,
  PopoverTrigger,
  List,
  ListItem,
  Card,
  TabbedCard,
  Tabs,
  TooltipTrigger,
  Tooltip,
  RadioGroup,
  Radio,
  Text,
  Label,
  LabelGroup,
  Alert,
  ActionMenu,
  Item,
  TextField,
  Form,
} from '../.';

const { TabPane } = Tabs;
const App = () => {
  return (
    <Provider>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Alert title="Title" variant="info">
          Alert message goes here
        </Alert>
        <Card
          title={'Hello World'}
          extra={
            <PopoverTrigger>
              <ActionButton>Click Me</ActionButton>
              <div style={{ border: '1px solid gray' }}>
                Popover content here
              </div>
            </PopoverTrigger>
          }
        >
          <List>
            <ListItem>Item One</ListItem>
          </List>
        </Card>
        <TabbedCard
          title="Card With Tabs"
          extra={
            <TooltipTrigger>
              <ActionButton>Hover</ActionButton>
              <Tooltip>Tooltip text goes here</Tooltip>
            </TooltipTrigger>
          }
        >
          <Tabs>
            <TabPane name="Tab One">
              <List>
                <ListItem>
                  Item One
                  <LabelGroup>
                    <Label color="red">Danger</Label>
                    <Label color="green">Okay</Label>
                  </LabelGroup>
                </ListItem>
                <ListItem>Item Two</ListItem>
                <ListItem>Item Three</ListItem>
              </List>
            </TabPane>
            <TabPane name="Tab Two">
              <List>
                <ListItem>Tab Two Item One</ListItem>
                <ListItem>Tab Two Item Two</ListItem>
                <ListItem> Tab Two Item Three</ListItem>
              </List>
            </TabPane>
          </Tabs>
        </TabbedCard>
        <Card
          title="Radio Form"
          extra={
            <ActionMenu align="end">
              <Item>Copy</Item>
            </ActionMenu>
          }
        >
          <RadioGroup
            label="here are the animals to choose from"
            defaultValue="cats"
          >
            <Radio label="Dogs" value="dogs" />
            <Radio label="Cats" value="cats">
              <ActionButton>Example Child</ActionButton>
              <ActionButton>Example Child</ActionButton>
              <ActionButton>Example Child</ActionButton>
            </Radio>
            <Radio label="Parrots" value="parrots" isDisabled>
              <Text> Example Text </Text>
              <ActionButton>Example Child</ActionButton>
              <ActionButton>Example Child</ActionButton>
            </Radio>
          </RadioGroup>
        </Card>
        <FormCard />
      </div>
    </Provider>
  );
};

function FormCard() {
  const [val, setVal] = React.useState('');
  const isValid = val.length > 10 && val.length < 15;
  return (
    <Card title="Form">
      <Form>
        <TextField
          label="Field"
          validationState={isValid ? 'valid' : 'invalid'}
          value={val}
          errorMessage={
            isValid ? null : 'Value must be between 10 and 15 characters'
          }
          addonBefore="Name"
          isRequired
          onChange={setVal}
        />
      </Form>
    </Card>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

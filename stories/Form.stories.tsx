import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Form,
  FormProps,
  TextField,
  Picker,
  Item,
  Field,
  Button,
  Dropdown,
  Text,
  Provider,
} from '../src';
import { useForm, Controller } from 'react-hook-form';
import dedent from 'ts-dedent';

const meta: Meta = {
  title: 'Form',
  component: Form,
  argTypes: {
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormProps> = (args) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (d: any) => {
    alert(JSON.stringify(d));
  };
  return (
    <Provider>
      <Form {...args} action="" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={'name'}
          control={control}
          rules={{ required: 'This field is required', min: 10, max: 20 }}
          render={({
            field: { onChange, value },
            fieldState: { invalid, error },
          }) => (
            <TextField
              onChange={onChange}
              value={value}
              validationState={invalid ? 'invalid' : undefined}
              label={'Name'}
              placeholder={'enter your name'}
              errorMessage={error?.message}
              description="The name of the account"
            />
          )}
        />
        <Controller
          name={'email'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={onChange}
              value={value}
              label={'Email'}
              description="The user's email address"
            />
          )}
        />
        <Controller
          name={'Occupation'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={onChange}
              value={value}
              label={'Occupation'}
              placeholder="The job of the user"
            />
          )}
        />
        <Controller
          name={'chargeAmount'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              addonBefore="$"
              onChange={onChange}
              value={value}
              label={'Charge Amount'}
              description="The amount to charge the user"
            />
          )}
        />

        <Controller
          name={'tier'}
          control={control}
          rules={{ required: 'This field is required' }}
          render={({
            field: { onChange, value },
            fieldState: { invalid, error },
          }) => (
            <Picker
              addonBefore="$"
              onSelectionChange={onChange}
              selectedKey={value}
              label={'Charge Amount'}
              validationState={invalid ? 'invalid' : undefined}
              errorMessage={error?.message}
              aria-errormessage={error?.message}
            >
              <Item>Free</Item>
              <Item>Paid</Item>
            </Picker>
          )}
        />

        <Field label="Dropdown" description="This is a dropdown">
          <Controller
            name={'dropdown'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Dropdown menu={<div></div>}>Some Dropdown</Dropdown>
            )}
          />
        </Field>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const Disabled = Template.bind({}, { isDisabled: true });

Default.args = { type: 'primary', children: 'Button' };

export const QuietForm: Story<FormProps> = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (d: any) => {
    alert(JSON.stringify(d));
  };
  return (
    <Form action="" onSubmit={handleSubmit(onSubmit)} isQuiet>
      <Controller
        name={'name'}
        control={control}
        rules={{ required: 'This field is required', min: 10, max: 20 }}
        render={({
          field: { onChange, value },
          fieldState: { invalid, error },
        }) => (
          <TextField
            onChange={onChange}
            value={value}
            validationState={invalid ? 'invalid' : undefined}
            label={'Name'}
            placeholder={'enter your name'}
            errorMessage={error?.message}
            description="The name of the account"
          />
        )}
      />
      <Controller
        name={'email'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            onChange={onChange}
            value={value}
            label={'Email'}
            description="The user's email address"
          />
        )}
      />
      <Controller
        name={'Occupation'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            onChange={onChange}
            value={value}
            label={'Occupation'}
            description="The job of the user"
          />
        )}
      />
      <Controller
        name={'chargeAmount'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            onChange={onChange}
            value={value}
            label={'Charge Amount'}
            description="The amount to charge the user"
          />
        )}
      />
      <Controller
        name={'tier'}
        control={control}
        rules={{ required: 'This field is required' }}
        render={({
          field: { onChange, value },
          fieldState: { invalid, error },
        }) => (
          <Picker
            addonBefore="$"
            onSelectionChange={onChange}
            selectedKey={value}
            label={'Charge Amount'}
            validationState={invalid ? 'invalid' : undefined}
            errorMessage={error?.message}
            aria-errormessage={error?.message}
          >
            <Item>Free</Item>
            <Item>Paid</Item>
          </Picker>
        )}
      />
      <Field label="Dropdown" description="This is a dropdown">
        <Controller
          name={'dropdown'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Dropdown menu={<div></div>}>Some Dropdown</Dropdown>
          )}
        />
      </Field>
      <Controller
        name={'picker'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Picker label="Picker">
            <Item>First Item</Item>
          </Picker>
        )}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const Break = () => (
  <div
    style={{
      flexBasis: '100%',
      height: 0,
    }}
  />
);

export const InlineForm: Story<FormProps> = (props) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (d: any) => {
    alert(JSON.stringify(d));
  };
  return (
    <Provider>
      <Form
        {...props}
        action=""
        onSubmit={handleSubmit(onSubmit)}
        isQuiet
        layout="inline"
      >
        <Text>Create a monitor named</Text>
        <Controller
          name={'name'}
          control={control}
          rules={{ required: 'This field is required', min: 10, max: 20 }}
          render={({
            field: { onChange, value },
            fieldState: { invalid, error },
          }) => (
            <TextField
              onChange={onChange}
              value={value}
              validationState={invalid ? 'invalid' : undefined}
              aria-label={'Name'}
              placeholder={'e.g. drift monitor'}
              errorMessage={error?.message}
              aria-errormessage={error?.message}
            />
          )}
        />
        <Text>with a description</Text>
        <Controller
          name={'description'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={onChange}
              value={value}
              aria-label={'description'}
              placeholder="a description"
            />
          )}
        />
        <Text>tracking</Text>
        <Controller
          name={'type'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Dropdown menu={<div></div>}>drift</Dropdown>
          )}
        />
        <Text>and measuring</Text>
        <Controller
          name={'type'}
          control={control}
          rules={{
            required: 'This field is required',
            validate: (value) => value !== 'psi' || 'Psi is not supported',
          }}
          render={({
            field: { onChange, value },
            fieldState: { invalid, error },
          }) => (
            <Picker
              aria-label="Picker"
              defaultSelectedKey={'psi'}
              selectedKey={value}
              onSelectionChange={onChange}
              validationState={invalid ? 'invalid' : undefined}
              aria-errormessage={error?.message}
            >
              <Item key="psi">PSI</Item>
              <Item key="kl">KL Divergence</Item>
            </Picker>
          )}
        />
        <Break />
        <Text>evaluating every</Text>
        <Controller
          name={'time'}
          control={control}
          rules={{ required: 'This field is required', min: 10, max: 20 }}
          render={({
            field: { onChange, value },
            fieldState: { invalid, error },
          }) => (
            <TextField
              onChange={onChange}
              value={value}
              validationState={invalid ? 'invalid' : undefined}
              aria-label={'time'}
              type="number"
              width={'static-size-900'}
              errorMessage={error?.message}
              aria-errormessage={error?.message}
            />
          )}
        />
        <Controller
          name={'picker'}
          control={control}
          render={() => (
            <Picker aria-label="Picker" defaultSelectedKey={'hours'}>
              <Item key="hours">hours</Item>
              <Item key="minutes">minutes</Item>
            </Picker>
          )}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Provider>
  );
};

InlineForm.parameters = {
  docs: {
    description: {
      story: dedent`
      A inline layout allows you to create a an inline mad-lib style form. Make sure to add the appropriate aria-labels to your form elements.`,
    },
  },
};

export const InlineFormDisabled: Story<FormProps> = InlineForm.bind(
  {},
  {
    isDisabled: true,
  }
);

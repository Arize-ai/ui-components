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
} from '../src';
import { useForm, Controller } from 'react-hook-form';

const meta: Meta = {
  title: 'Form',
  component: Form,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormProps> = args => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (d: any) => {
    alert(JSON.stringify(d));
  };
  return (
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
            description="The job of the user"
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
        render={({ field: { onChange, value } }) => (
          <Picker
            addonBefore="$"
            onSelectionChange={onChange}
            selectedKey={value}
            label={'Charge Amount'}
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
  );
};

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
        render={({ field: { onChange, value } }) => (
          <Picker
            onSelectionChange={onChange}
            selectedKey={value}
            label={'Charge Amount'}
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

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const Disabled = Template.bind({}, { isDisabled: true });

Default.args = { type: 'primary', children: 'Button' };

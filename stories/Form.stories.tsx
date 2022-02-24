import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps, TextField } from '../src';
import InfoTip from './components/InfoTip';
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
    // @ts-ignore
    <Form {...args} action="" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name={'name'}
        control={control}
        rules={{ required: 'This field is required' }}
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
          />
        )}
      />
      <Controller
        name={'email'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={'Email'} />
        )}
      />
      <Controller
        name={'Occupation'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={'Occupation'} />
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
          />
        )}
      />
      <input type="submit" />
    </Form>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = { type: 'primary', children: 'Button' };

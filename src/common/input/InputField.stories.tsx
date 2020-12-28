import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { InputField, InputFieldPropsType } from './InputField'

export default {
  title: 'MyTasks/InputField',
  component: InputField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<InputFieldPropsType> = (args) => <InputField {...args} />;

export const FieldName = Template.bind({});
FieldName.args = {
  fieldName: 'Name',
  value: 'Sergey',
  autoFocus: true
}
export const WithoutFieldName = Template.bind({});
WithoutFieldName.args = {
  value: 'Sergey',
  autoFocus: true
}
export const PlaceholderFieldName = Template.bind({});
PlaceholderFieldName.args = {
  fieldName: 'Name',
  placeholder: 'Enter your name...',
}
export const PlaceholderWithoutFieldName = Template.bind({});
PlaceholderWithoutFieldName.args = {
  placeholder: 'Enter your name...',
}
export const Medium = Template.bind({});
Medium.args = {
  fieldName: 'Size',
  value: 'Medium',
  autoFocus: true
}
export const Small = Template.bind({});
Small.args = {
  fieldName: 'Size',
  value: 'Small',
  autoFocus: true
}
export const Large = Template.bind({});
Large.args = {
  fieldName: 'Size',
  value: 'Large',
  autoFocus: true
}
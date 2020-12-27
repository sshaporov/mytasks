import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxPropsType } from './Checkbox'

export default {
  title: 'MyTasks/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<CheckboxPropsType> = (args) => <Checkbox {...args} />;

export const Active = Template.bind({});
Active.args = {
  label: 'Active',
}

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked',
  checked: true,
}

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
}

export const Checked_and_Disabled = Template.bind({});
Checked_and_Disabled.args = {
  label: 'Checked and Disabled',
  disabled: true,
  checked: true,
}

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium size (default)',
  //@ts-ignore
  size: 'M',

}

export const Small = Template.bind({});
Small.args = {
  label: 'Small size',
  //@ts-ignore
  size: 'S',
}

export const Large= Template.bind({});
Large.args = {
  label: 'Large size',
  //@ts-ignore
  size: 'L',
}




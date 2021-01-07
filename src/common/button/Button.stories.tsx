import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonPropsType } from './Button'

export default {
  title: 'MyComponents/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonPropsType> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  primary: true,
}
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
}
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
}

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium',
  buttonSize: 'M',
}

export const Small = Template.bind({});
Small.args = {
  label: 'Small',
  buttonSize: 'S',
}

export const Large = Template.bind({});
Large.args = {
  label: 'Large',
  buttonSize: 'L',
}


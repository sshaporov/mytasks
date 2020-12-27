import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonPropsType } from './Button'

export default {
  title: 'MyTasks/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonPropsType> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  primary: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
}

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  size: 'M',
}

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'S',
}

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'L',
}


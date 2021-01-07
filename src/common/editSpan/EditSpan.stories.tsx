import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { EditSpan, EditSpanPropsType } from './EditSpan';

export default {
  title: 'MyComponents/EditSpan',
  component: EditSpan,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<EditSpanPropsType> = (args) => <EditSpan {...args} />;

export const Expanded = Template.bind({});
Expanded.args = {
  value: 'DoubleClick me'
}





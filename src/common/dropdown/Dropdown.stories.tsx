import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {Dropdown, DropDownPropsType} from './Dropdown';
import delIcon from './img/delete.svg';
import addIcon from './img/add.svg';
import updIcon from './img/edit.svg';

export default {
  title: 'MyTasks/DropDown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<DropDownPropsType> = (args) => <Dropdown {...args} />;

export const Expanded = Template.bind({});
Expanded.args = {
  items: [
    {id: 'C', title: 'Create', icon: addIcon},
    {id: 'E', title: 'Edit', icon: updIcon},
    {id: 'D', title: 'Delete', icon: delIcon},
  ],
  isExpand: true
}

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: [
    {id: 'C', title: 'Create', icon: addIcon},
    {id: 'E', title: 'Edit', icon: updIcon},
    {id: 'D', title: 'Delete', icon: delIcon},
  ],
  isExpand: false
}




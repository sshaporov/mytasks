import React, {useState} from 'react'
import {DEV_VERSION} from '../../../config'
import {Checkbox} from '../../../common/checkbox/Checkbox'
import {Dropdown} from '../../../common/dropdown/Dropdown'
import delIcon from '../../../common/dropdown/img/delete.svg'
import addIcon from '../../../common/dropdown/img/add.svg'
import updIcon from '../../../common/dropdown/img/edit.svg'
import archIcon from '../../../common/dropdown/img/edit.svg'
import s from './Task.module.css'
import { EditSpan } from '../../../common/editSpan/EditSpan'

export type TaskPropsType = {
  id: string
  title: string
  removeTask: (id: string) => void
  markTask: (id: string) => void
  changeTaskTitle: (id: string, text: string) => void
  controlsSize: 'S' | 'M' | 'L',
  checked: boolean
}
export const Task: React.FC<TaskPropsType> = React.memo((
  {
    title,
    controlsSize,
    id,
    removeTask,
    markTask,
    changeTaskTitle,
    checked
  }
) => {
  DEV_VERSION && console.log('Task ' + title);

  const onClickCheckbox = () => {
    markTask(id)
  }

  const onChangeTitle = (text: string) => {
    changeTaskTitle(id, text)
  }

  const [isEditByDropdown, setIsEditByDropdown] = useState<boolean | undefined>(undefined)

  const onClickDropDownItem = (action: string) => {
    console.log('action', action)
    switch (action) {
      case 'D':
        return removeTask(id)
      case 'M':
        return markTask(id)
      case 'E':
        return setIsEditByDropdown(true)
    }
  }

  const items = [
    {id: 'D', title: 'Delete', icon: delIcon},
    {id: 'C', title: 'Create', icon: addIcon},
    {id: 'E', title: 'Edit', icon: updIcon},
    {id: 'A', title: 'Archive', icon: archIcon},
    {id: 'M', title: 'Marked', icon: archIcon},
  ]

  return (
    <div className={s.taskWrapper}>
      <input
        type={'checkbox'}
        onClick={onClickCheckbox}
        checked={checked}/>
      <EditSpan value={title} changeValue={onChangeTitle} mode={isEditByDropdown}/>
      <Dropdown items={items} onClickDropDownItem={onClickDropDownItem}/>
    </div>
  )
})
import React from 'react'
import {DEV_VERSION} from '../../../config'
import {Checkbox} from '../../../common/checkbox/Checkbox'
import {Dropdown} from '../../../common/dropdown/Dropdown'
import delIcon from '../../../img/delete.svg'
import addIcon from '../../../img/plus.svg'
import updIcon from '../../../img/pencil.svg'
import archIcon from '../../../img/edit.svg'
import s from './Task.module.css'

export type TaskPropsType = {
  id: string
  title: string
  removeTask: (id: string) => void
  markTask: (id: string) => void
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
    checked
  }
) => {
  DEV_VERSION && console.log('Task ' + title);

  const onClickDropDownItem = (action: string) => {
    console.log('Dropdown ItemID: ', id)

    switch (action) {
      case 'D': return removeTask(id)
      case 'M': return markTask(id)
    }

    // проверям какой ID нажали ту операцию и выполняем:

    // upd Task
    // remove Task
    // Archive Task
  }

  const onClickCheckbox = () => {
    markTask(id)
  }

  const items = [
    {id: 'D', title: 'Delete', icon: delIcon},
    {id: 'C', title: 'Create', icon: addIcon},
    {id: 'U', title: 'Update', icon: updIcon},
    {id: 'A', title: 'Archive', icon: archIcon},
    {id: 'M', title: 'Marked', icon: archIcon},
  ]

  return (
    <div className={s.taskWrapper}>
      <Checkbox
        onChangeChecked={onClickCheckbox}
        label={title}
        checkboxSize={controlsSize}
        checked={checked}
      />
      <Dropdown items={items} onClickDropDownItem={onClickDropDownItem}/>
    </div>
  )
})
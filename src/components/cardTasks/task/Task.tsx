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
  controlsSize: 'S' | 'M' | 'L'
}
export const Task: React.FC<TaskPropsType> = React.memo((
  {
    title,
    controlsSize,
    id,
    removeTask
  }
) => {
  DEV_VERSION && console.log('Task ' + title);

  const onClickDropDownItem = (id: string) => {
    console.log('Dropdown ItemID: ', id)

    // проверям какой ID нажали ту операцию и выполняем:

    // upd Task
    // remove Task
    // Archive Task
  }

  const items = [
    {id: 'it1', title: 'Delete', icon: delIcon},
    {id: 'it2', title: 'Create', icon: addIcon},
    {id: 'it3', title: 'Update', icon: updIcon},
    {id: 'it4', title: 'Archive', icon: archIcon},
  ]

  return (
    <div className={s.taskWrapper}>
      <Checkbox label={title} checkboxSize={controlsSize}/>
      <Dropdown items={items} onClickDropDownItem={onClickDropDownItem}/>
    </div>
  )
})
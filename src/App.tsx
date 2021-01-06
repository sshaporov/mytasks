import React, {useState} from 'react'
import {v1} from 'uuid'
import {CardTasks} from './components/cardTasks/CardTasks';
import {DEV_VERSION} from './config';
import {Input} from './common/input/Input';
import {Button} from './common/button/Button';
import {Dropdown} from './common/dropdown/Dropdown';
import delIcon from './img/delete.svg'
import addIcon from './img/plus.svg'
import updIcon from './img/pencil.svg'
import archIcon from './img/edit.svg'


export type TaskType = {
  id: string,
  title: string,
  isDone: boolean,
}

export type FilterValueType = 'ALL' | 'COMPLETED' | 'ACTIVE'

const App = () => {
  DEV_VERSION && console.log('App');

  const [tasks, setTasks] = useState<Array<TaskType>>([
    {id: v1(), title: 'FrontEnd', isDone: true},
    {id: v1(), title: 'BackEnd', isDone: false},
    {id: v1(), title: 'Mobile', isDone: true},
    {id: v1(), title: 'DB', isDone: false},
    {id: v1(), title: 'Rest', isDone: true},
    {id: v1(), title: 'WebSocket', isDone: false},
    {id: v1(), title: 'Unit', isDone: true},
  ])
  const [filterValue, setFilterValue] = useState<FilterValueType>('ALL')

  const removeTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id))
  }
  const changeFilterValue = (value: FilterValueType) => {
    setFilterValue(value)
  }

  let tasksForDisplaying = tasks

  if (filterValue === 'COMPLETED') {
    tasksForDisplaying = tasks.filter(t => t.isDone)
  }
  if (filterValue === 'ACTIVE') {
    tasksForDisplaying = tasks.filter(t => !t.isDone)
  }

  const items = [
    {id: 'it1', title: 'Delete', icon: delIcon},
    {id: 'it2', title: 'Create', icon: addIcon},
    {id: 'it3', title: 'Update', icon: updIcon},
    {id: 'it4', title: 'Archive', icon: archIcon},
  ]
  // const items = [
  //   {id: 'it1', title: 'Delete', hotKey: 'Ctrl+V', icon: delIcon},
  //   {id: 'it2', title: 'Create', hotKey: 'Ctrl+C', icon: addIcon},
  //   {id: 'it3', title: 'Update', hotKey: 'Ctrl+D', icon: updIcon},
  //   {id: 'it4', title: 'Archive', hotKey: 'Ctrl+R', icon: archIcon},
  // ]

  const onClickMenuItem = (itemId: string) => {
    console.log('click by', itemId)
  }

  return (
    <div>
      <CardTasks
        controlsSize={'M'}
        tasks={tasksForDisplaying}
        removeTask={removeTask}
        changeFilterValue={changeFilterValue}
      />
    </div>
  )
}

export default App;

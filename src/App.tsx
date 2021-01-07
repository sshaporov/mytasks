import React, {useState} from 'react'
import {v1} from 'uuid'
import {CardTasks} from './components/cardTasks/CardTasks';
import {DEV_VERSION} from './config';
import {Input} from './common/input/Input';
import {Button} from './common/button/Button';
import {Dropdown} from './common/dropdown/Dropdown';
import delIcon from './common/dropdown/img/delete.svg'
import addIcon from './common/dropdown/img/add.svg'
import updIcon from './common/dropdown/img/edit.svg'
import archIcon from './common/dropdown/img/edit.svg'


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

  const markTask = (id: string) => {
    const task = tasks.find(t => t.id === id)
    if (task) {
      task.isDone = !task.isDone
      setTasks([...tasks])
    }
  }

  const changeTaskTitle = (id: string, newText: string) => {
    const task = tasks.find(t => t.id === id)
    if (task) {
      task.title = newText
      setTasks([...tasks])
    }
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

  const onClickMenuItem = (itemId: string) => {
    console.log('click by', itemId)
  }

  return (
    <div>
      <CardTasks
        controlsSize={'M'}
        tasks={tasksForDisplaying}
        removeTask={removeTask}
        changeTaskTitle={changeTaskTitle}
        markTask={markTask}
        changeFilterValue={changeFilterValue}
      />
    </div>
  )
}

export default App;

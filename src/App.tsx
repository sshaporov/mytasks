import React, {useState} from 'react'
import {CardTasks} from './components/cardTasks/CardTasks';
import {DEV_VERSION} from './config';

export type TaskType = {
  id: string,
  title: string,
  isDone: boolean,
}

export type FilterValueType = 'ALL' | 'COMPLETED' | 'ACTIVE'

function App() {
  DEV_VERSION && console.log('App');

  const [tasks, setTasks] = useState<Array<TaskType>>([
    {id: 'q', title: 'FrontEnd', isDone: true},
    {id: 'w', title: 'BackEnd', isDone: false},
    {id: 'e', title: 'Mobile', isDone: true},
    {id: 'r', title: 'DB', isDone: false},
    {id: 't', title: 'Rest', isDone: true},
    {id: 'y', title: 'WebSocket', isDone: false},
    {id: 'u', title: 'Unit', isDone: true},
  ])
  // const [tasksForDisplaying, setTasksForDisplaying] = useState<Array<TaskType>>(tasks)
  const [filterValue, setFilterValue] = useState<FilterValueType>('ALL')

  const removeTask = (id: string) => {
    setTasks(tasks.filter(t => t.id != id))
  }
  const changeFilterValue = (value: FilterValueType) => {
    setFilterValue(value)
  }

  let tasksForDisplaying = tasks

  if (filterValue === 'COMPLETED') {
    tasksForDisplaying = tasks.filter(t => t.isDone === true)
  }
  if (filterValue === 'ACTIVE') {
    tasksForDisplaying = tasks.filter(t => t.isDone === false)
  }

  return <CardTasks
    tasks={tasksForDisplaying}
    removeTask={removeTask}
    changeFilterValue={changeFilterValue}
  />
}

export default App;

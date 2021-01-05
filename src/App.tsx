import React, {useState} from 'react'
import {v1} from 'uuid'
import {CardTasks} from './components/cardTasks/CardTasks';
import {DEV_VERSION} from './config';
import {Input} from './common/input/Input';
import {Button} from './common/button/Button';
import {Menu} from './common/menu/Menu';

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
    {title: 'ITEM_1', hotKey: 'ctrl + V', icon: 'https://ru.freepik.com/free-icon/hand-silhouette-with-flexed-forefinger_782948.htm'},
    {title: 'ITEM_2', hotKey: 'ctrl + V'},
    {title: 'ITEM_3', hotKey: 'ctrl + V'},
    {title: 'ITEM_4', hotKey: 'ctrl + V'},
    {title: 'ITEM_5', hotKey: 'ctrl + V'},
  ]

  return (
    <div>
      <Input/>
      <Button label={'Add task'}/>
      <CardTasks
        tasks={tasksForDisplaying}
        removeTask={removeTask}
        changeFilterValue={changeFilterValue}
      />
      <Button label={'...'}/>
      <Menu items={items}/>
    </div>
  )
}

export default App;

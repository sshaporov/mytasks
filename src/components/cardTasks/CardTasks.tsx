import React from 'react'
import {TaskType} from '../../App'
import {Task} from './task/Task'
import {ProgressBar} from './progressBar/ProgressBar'
import {DEV_VERSION} from '../../config'
import {CardHeader} from './cardHeader/CardHeader';
import {CardFooter} from './cardFooter/CardFooter';


export type CardTasksPropsType = {
  tasks: Array<TaskType>
  removeTask: (id: string) => void
}
export const CardTasks: React.FC<CardTasksPropsType> = React.memo((
  {
    tasks,
    removeTask
  }
) => {
    DEV_VERSION && console.log('CardTasks');

    return (
      <div>
        <CardHeader cardName={'Test Card Name'}/>
        <ProgressBar/>
        <ul>
          {tasks.map((t) => <Task key={t.id} title={t.title} id={t.id} removeTask={removeTask} />)}
        </ul>
        <CardFooter/>
      </div>
    )
  }
)
import React from 'react'
import {TaskType} from '../../App'
import {Task} from './task/Task'
import {ProgressBar} from './progressBar/ProgressBar'
import {DEV_VERSION} from '../../config'
import {CardHeader} from './cardHeader/CardHeader';
import {CardFooter} from './cardFooter/CardFooter';


export type CardTasksPropsType = {
  tasks: Array<TaskType>
}
export const CardTasks: React.FC<CardTasksPropsType> = React.memo((
  {
    tasks
  }
) => {
    DEV_VERSION && console.log('CardTasks');

    return (
      <div>
        <CardHeader cardName={'Test Card Name'}/>
        <ProgressBar/>
        <ul>
          {tasks.map((t) => <Task title={t.title}/>)}
        </ul>
        <CardFooter/>
      </div>
    )
  }
)
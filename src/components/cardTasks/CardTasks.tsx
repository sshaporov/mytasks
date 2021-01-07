import React from 'react'
import {FilterValueType, TaskType} from '../../App'
import {Task} from './task/Task'
import {ProgressBar} from './progressBar/ProgressBar'
import {DEV_VERSION} from '../../config'
import {CardHeader} from './cardHeader/CardHeader'
import {CardFooter} from './cardFooter/CardFooter'
import {Filter} from './filter/Filter'
import s from './CardTasks.module.css'

export type CardTasksPropsType = {
  controlsSize: 'S' | 'M' | 'L'
  tasks: Array<TaskType>
  removeTask: (id: string) => void
  changeTaskTitle: (id: string, text: string) => void
  markTask: (id: string) => void
  changeFilterValue: (filterValue: FilterValueType) => void
}
export const CardTasks: React.FC<CardTasksPropsType> = React.memo((
  {
    tasks,
    removeTask,
    markTask,
    controlsSize,
    changeTaskTitle,
    changeFilterValue
  }
) => {
    DEV_VERSION && console.log('CardTasks');

    return (
      <div className={s.cardTasksWrapper}>
        {/*<CardHeader cardName={'Test Card Name'}/>*/}
        {/*<ProgressBar/>*/}

        {tasks.map((t) => <Task key={t.id}

                                title={t.title}
                                id={t.id}
                                checked={t.isDone}

                                removeTask={removeTask}
                                markTask={markTask}
                                changeTaskTitle={changeTaskTitle}
                                controlsSize={controlsSize}
        />)}

        <Filter changeFilterValue={changeFilterValue}/>
        {/*<CardFooter/>*/}
      </div>
    )
  }
)
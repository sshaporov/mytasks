import React from 'react'
import {DEV_VERSION} from '../../../config'

export type TaskPropsType = {
  id: string
  title: string
  removeTask: (id: string) => void
}
export const Task: React.FC<TaskPropsType> = React.memo((
  {
    title,
    id,
    removeTask
  }
) => {
    DEV_VERSION && console.log('Task ' + title);

    return (
      <div>
        <li>{title}</li>
        <button>upd</button>
        <button onClick={() => removeTask(id)}>del</button>
      </div>
    )
  }
)
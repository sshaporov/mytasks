import React from 'react'
import {DEV_VERSION} from '../../../config';

export type TaskPropsType = {
  title: string
}
export const Task: React.FC<TaskPropsType> = React.memo((
  {
    title
  }
) => {
    DEV_VERSION && console.log('Task ' + title);

    return (
      <div>
        <li>{title}</li>
        <button>upd</button>
        <button>del</button>
      </div>
    )
  }
)
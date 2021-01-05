import React from 'react'
import {DEV_VERSION} from '../../../config';
import {FilterValueType} from '../../../App';

export type FilterPropsType = {
  changeFilterValue: (filterValue: FilterValueType) => void
}
export const Filter: React.FC<FilterPropsType> = React.memo((
  {
    changeFilterValue
  }
) => {
  DEV_VERSION && console.log('Filter');

  return (
    <div>
      <button onClick={() => changeFilterValue('ALL')}>All</button>
      <button onClick={() => changeFilterValue('ACTIVE')}>Active</button>
      <button onClick={() => changeFilterValue('COMPLETED')}>Completed</button>
    </div>
  )
})
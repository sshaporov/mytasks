import React, {ChangeEvent, useEffect, useState} from 'react';
import {Input} from '../input/Input';

export type EditSpanPropsType = {
  value: string
  changeValue: (value: string) => void
  mode?: boolean
}

export const EditSpan: React.FC<EditSpanPropsType> = React.memo((
  {
    value,
    changeValue,
    mode = false
  }
) => {
  let [editMode, setEditMode] = useState<boolean>(false)
  let [title, setTitle] = useState<string>(value)

  useEffect(() => {
    setEditMode(mode)
  }, [mode])

  console.log('mode edit', mode)

  const activatedEditMode = () => {
    setEditMode(true)
  }
  const deActivatedEditMode = () => {
    setEditMode(false)
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return editMode
    ? <input value={title}
             onChange={onChangeHandler}
             onBlur={deActivatedEditMode}
             autoFocus={true}/>
    : <span onDoubleClick={activatedEditMode}>{value}</span>
})
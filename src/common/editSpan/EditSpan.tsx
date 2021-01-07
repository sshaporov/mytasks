import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
  value: string
  changeValue: (value: string) => void
}

export const EditSpan = React.memo((props: EditableSpanPropsType) => {
  let [editMode, setEditMode] = useState<boolean>(false)
  let [title, setTitle] = useState<string>(props.value)

  const activatedEditMode = () => {
    setEditMode(true)
  }
  const deActivatedEditMode = () => {
    setEditMode(false)
    props.changeValue(title)
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return editMode
    ? <input value={title}
             onChange={onChangeHandler}
             onBlur={deActivatedEditMode}
             autoFocus={true}/>
    : <span onDoubleClick={activatedEditMode}>{props.value}</span>
})
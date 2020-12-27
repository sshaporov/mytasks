import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './Checkbox.module.css'
import {DEV_VERSION} from "../../config";

type CheckboxPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  {
    onChangeChecked?: (checked: boolean) => void
    label: string
  }

export const Checkbox: React.FC<CheckboxPropsType> = React.memo((
  {
    type, // get this default attribute and ignore it to not change type 'checkbox'
    onChange,
    onChangeChecked,
    label,
    ...restProps
  }
) => {
  DEV_VERSION && console.log('Checkbox ' + label);

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeChecked && onChangeChecked(e.currentTarget.checked)
  }

  return (
    <label className={[s.control, s.controlCheckbox].join(' ')}>
      {label && <span className={restProps.disabled ? s.disabledClassName : ''}>{label}</span>}
      <input
        type={'checkbox'}
        onChange={onChangeCallback}
        {...restProps}
      />
      <div className={s.controlIndicator}></div>
    </label> // благодаря label нажатие на спан передастся в инпут

  );
})



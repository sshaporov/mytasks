import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './Checkbox.module.css'
import {DEV_VERSION} from '../../config'

export type CheckboxPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  {
    /**
     * Checkbox contents
     */
    label: string
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'S' | 'M' | 'L';
    /**
     * Optional click handler
     */
    onChangeChecked?: (checked: boolean) => void
  }

export const Checkbox: React.FC<CheckboxPropsType> = React.memo((
  {
    type, // get this default attribute and ignore it to not change type 'checkbox'
    size = 'M',
    backgroundColor,
    label,
    onChange,
    onChangeChecked,
    ...restProps
  }
) => {
  DEV_VERSION && console.log('Checkbox ' + label);

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeChecked && onChangeChecked(e.currentTarget.checked)
  }

  const disabledClassName = restProps.disabled ? s.disabledClassName : ''
  const controlSize = size && s[`controlSize` + size]
  const controlIndicatorSize = size && s[`controlIndicatorSize` + size]
  const controlCheckboxSize = size && s[`controlCheckboxSize` + size]

  return (
    <label className={[s.control, s.controlCheckbox, disabledClassName, controlSize, controlCheckboxSize].join(' ')}>
      {label}
      <input
        type={'checkbox'}
        onChange={onChangeCallback}
        {...restProps}
      />
      <div className={[s.controlIndicator, controlIndicatorSize].join(' ')} style={{backgroundColor}}></div>
    </label>

  );
})



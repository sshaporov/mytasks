import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback} from 'react'
import {DEV_VERSION} from '../../config'
import s from './InputField.module.css'

export type InputFieldPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  /**
   * Optional input handler
   */
  onChangeText?: (value: string) => void;
  /**
   * Optional check handler
   */
  onChangeChecked?: (checked: boolean) => void;
  /**
   * Optional parameter for displaying input field name
   */
  fieldName?: string
};

export const InputField: React.FC<InputFieldPropsType> = React.memo((
  {
    onChange,
    onChangeText,
    onChangeChecked,
    fieldName,
    ...restProps
  }
) => {
  DEV_VERSION && console.log('InputField')

  const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeText && onChangeText(e.currentTarget.value)
    onChangeChecked && onChangeChecked(e.currentTarget.checked)
  }, [onChange, onChangeText, onChangeChecked])

  return (
    <div className={[s.container, s.inputEffect].join(' ')}>
      <input
        onChange={onChangeCallback}
        className={s.input}
        {...restProps}
      />
      <label>{fieldName}</label>
      <span className={s.focusBorder}></span>
    </div>
  )
})

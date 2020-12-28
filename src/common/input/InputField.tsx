import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback} from 'react'
import {DEV_VERSION} from '../../config'
import s from './InputField.module.css'

export type InputFieldPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  {
    /**
     * Optional input handler
     */
    onChangeText?: (value: string) => void
    /**
     * Optional check handler
     */
    onChangeChecked?: (checked: boolean) => void
    /**
     * How large should the button be?
     */
    inputSize?: 'S' | 'M' | 'L'
    /**
     * Optional parameter for displaying input field name
     */
    fieldName?: string
  };

export const InputField: React.FC<InputFieldPropsType> = React.memo((
  {
    onChange,
    onChangeText,
    inputSize = 'M',
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

  const inputSizeClassName = inputSize && s[`inputSize` + inputSize]
  const labelTextSizeClassName = inputSize && s[`labelTextSize` + inputSize]

  return (
    <div className={[s.container, s.inputEffect].join(' ')}>
      <input
        onChange={onChangeCallback}
        // className={s.inputText}
        className={[s.input, s.inputText, inputSizeClassName].join(' ')}
        {...restProps}
      />
      {/*<label className={s.labelText}>{fieldName}</label>*/}
      <label className={[s.labelText, labelTextSizeClassName].join(' ')}>{fieldName}</label>
      <span className={s.focusBorder}></span>
    </div>
  )
})

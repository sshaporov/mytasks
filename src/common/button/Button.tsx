import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import {DEV_VERSION} from '../../config'
import s from './Button.module.css'

export type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  {
    /**
     * Button contents
     */
    label: string
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean
    /**
     * What background color to use
     */
    backgroundColor?: string
    /**
     * How large should the button be?
     */
    buttonSize?: 'S' | 'M' | 'L'
    /**
     * Optional click handler
     */
    onClick?: () => void
  };

export const Button: React.FC<ButtonPropsType> = React.memo((
  {
    primary = false,
    buttonSize = 'M',
    backgroundColor,
    label,
    ...restProps
  }
) => {
  DEV_VERSION && console.log('Button ' + label);

  const disabledClassName = restProps.disabled ? s.buttonDisabled : ''
  const modeBtn = primary ? s.buttonPrimary : s.buttonSecondary;
  // create className for module css:
  // s.buttonSizeS || s.buttonSizeM || s.buttonSizeL
  const buttonSizeClassName = buttonSize && s[`buttonSize` + buttonSize]

  return (
    <button
      type="button"
      // use array.join(' ') method for adding some classes
      className={[s.button, buttonSizeClassName, modeBtn, disabledClassName].join(' ')}
      style={{backgroundColor}}
      {...restProps}
    >
      {label}
    </button>
  )
});
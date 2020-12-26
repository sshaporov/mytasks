import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.css'
import {DEV_VERSION} from '../../config'

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { info?: string };

const Button: React.FC<ButtonNyaPropsType> = React.memo((
    {
        info,
        ...props
    }
) => {

    DEV_VERSION && info && console.log("render Button" + info);
    return <button className={s.button} {...props}/>;
});

export default Button;
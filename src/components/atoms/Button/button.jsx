import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './button.scss'

export const BUTTON_TYPES = {
    PRIMARY: 'primary',
    DEFAULT: 'default',
    LIGHT: 'light'
}

export const BUTTON_SIZES = {
    SHRINK: 'shrink',
    EXPAND: 'expand',
    ICON: 'icon'
}

const Button = ({
    text, 
    icon, 
    type = BUTTON_TYPES.DEFAULT, 
    size = BUTTON_SIZES.SHRINK, 
    className = '', 
    onClick}) => (
    <div className={`button ${className} ${type} ${size}`} onClick={onClick} >
        {
            icon && 
            <FontAwesomeIcon 
                icon={icon} 
                className='button-icon'
                
            />
        }
        {text}
    </div>
)

export default Button
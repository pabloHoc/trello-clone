import React from 'react'
import './Button.scss'

const Button = props => (
    <div className='button'>
        {props.text}
    </div>
)

export default Button
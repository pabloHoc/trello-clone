import React from 'react'
import './TextInput.scss'

const TextInput = ({label, placeholder, value, onChange}) => (
    <>
        {label && <label className='text-input-label'>{label}</label>}
        <input 
            type='text' 
            placeholder={placeholder} 
            className='text-input'
            value={value}
            onChange={onChange} 
        />
    </>
)

export default TextInput
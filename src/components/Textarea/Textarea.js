import React from 'react'
import './Textarea.scss'

const Textarea = ({placeholder, value, onChange}) => (
    <textarea 
        className='textarea-input'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />        
)

export default Textarea
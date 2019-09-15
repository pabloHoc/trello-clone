import React from 'react'
import { Label, Input } from './styled'

const TextInput = ({label, placeholder, value, onChange}) => (
    <>
        {label && <Label>{label}</Label>}
        <Input 
            type='text' 
            placeholder={placeholder} 
            value={value}
            onChange={onChange} 
        />
    </>
)

export default TextInput
import React from 'react'
import * as Styled from './styled'

const TextInput = ({label, placeholder, value, onChange}) => (
    <>
        {label && <Styled.Label>{label}</Styled.Label>}
        <Styled.Input 
            type='text' 
            placeholder={placeholder} 
            value={value}
            onChange={onChange} 
        />
    </>
)

export default TextInput
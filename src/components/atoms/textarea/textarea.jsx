import React from 'react'
import * as S from './textarea.styled'

const Textarea = ({placeholder, value, onChange}) => (
    <S.Textarea 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />        
)

export default Textarea
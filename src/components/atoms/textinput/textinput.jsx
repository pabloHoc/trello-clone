import React from 'react'
import * as S from './textinput.styled'

const TextInput = ({label, placeholder, value, onChange, className}) => (
    <S.Wrapper className={className}>
        {label && <S.Label>{label}</S.Label>}
        <S.Input 
            type='text' 
            placeholder={placeholder} 
            value={value}
            onChange={onChange} 
        />
    </S.Wrapper>
)

export default TextInput
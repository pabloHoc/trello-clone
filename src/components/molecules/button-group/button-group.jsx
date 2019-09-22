import React from 'react'
import * as S from './button-group.styled'

const ButtonGroup = ({title, children}) => (
    <S.Wrapper>
        <S.Title>{title}</S.Title>
        {children}
    </S.Wrapper>
)

export default ButtonGroup
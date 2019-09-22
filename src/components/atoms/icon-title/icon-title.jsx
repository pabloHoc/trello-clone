import React from 'react'
import * as S from './icon-title.styled'

export const TITLE_SIZE = {
    BIG: 'big',
    MEDIUM: 'medium'
}

const IconTitle = ({title, icon, size}) => (
    <S.Wrapper>
        <S.Icon icon={icon} />
        <S.Title size={size}>{title}</S.Title>
    </S.Wrapper>
)

export default IconTitle
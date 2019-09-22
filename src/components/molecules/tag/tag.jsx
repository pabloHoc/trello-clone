import React from 'react'
import * as S from './tag.styled'

export const TAG_SIZES = {
    SMALL: 'small',
    BIG: 'big'
}

const Tag = ({size, color, name}) => (
    <S.Wrapper
        size={size} 
        color={color}
    >
        {name}
    </S.Wrapper>
)

export default Tag



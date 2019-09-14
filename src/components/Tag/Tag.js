import React from 'react'
import * as Styled from './styled'

export const TAG_SIZES = {
    SMALL: 'small',
    BIG: 'big'
}

const Tag = ({size, color, name}) => (
    <Styled.TagWrapper
        size={size} 
        color={color}
    >
        {name}
    </Styled.TagWrapper>
)

export default Tag



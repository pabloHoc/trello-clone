import React from 'react'
import { Wrapper } from './styled'

export const TAG_SIZES = {
    SMALL: 'small',
    BIG: 'big'
}

const Tag = ({size, color, name}) => (
    <Wrapper
        size={size} 
        color={color}
    >
        {name}
    </Wrapper>
)

export default Tag



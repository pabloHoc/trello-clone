import React from 'react'
import { Wrapper, Title } from './styled'

const ButtonGroup = ({title, children}) => (
    <Wrapper>
        <Title>{title}</Title>
        {children}
    </Wrapper>
)

export default ButtonGroup
import React from 'react'
import CloseButton from 'components/atoms/CloseButton/CloseButton';
import { Wrapper, Header, Title, Body } from './styled'

const Popover = ({title, children}) => (
    <Wrapper>
        <CloseButton />
        <Header>
            <Title>{title}</Title>
        </Header>
        <Body>
            {children}
        </Body>
    </Wrapper>
)

export default Popover
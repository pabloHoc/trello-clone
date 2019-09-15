import React from 'react'
import { Wrapper, Username, Text, Actions, Action } from './styled'

const Comment = ({username, text}) => (
    <Wrapper>
        <Username>{username}</Username>
        <Text>{text}</Text>
        <Actions>
            <Action href='#!'>Editar</Action>
            <Action href='#!'>Eliminar</Action>
        </Actions>
    </Wrapper>
)

export default Comment
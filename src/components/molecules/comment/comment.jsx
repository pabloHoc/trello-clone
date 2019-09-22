import React from 'react'
import * as S from './comment.styled'

const Comment = ({username, text}) => (
    <S.Comment.Wrapper>
        <S.Comment.Username>{username}</S.Comment.Username>
        <S.Comment.Text>{text}</S.Comment.Text>
        <S.Comment.Actions>
            <S.Comment.Action href='#!'>Editar</S.Comment.Action>
            <S.Comment.Action href='#!'>Eliminar</S.Comment.Action>
        </S.Comment.Actions>
    </S.Comment.Wrapper>
)

export default Comment
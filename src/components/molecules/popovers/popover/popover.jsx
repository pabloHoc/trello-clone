import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as S from './popover.styled'

const Popover = ({title, children}) => (
    <S.Wrapper>
        <S.CloseButton icon={faTimes} />
        <S.Header>
            <S.Title>{title}</S.Title>
        </S.Header>
        <S.Body>
            {children}
        </S.Body>
    </S.Wrapper>
)

export default Popover
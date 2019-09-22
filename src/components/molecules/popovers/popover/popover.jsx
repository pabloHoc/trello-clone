import React from 'react'
import CloseButton from 'components/atoms/close-button/close-button';
import * as S from './popover.styled'

const Popover = ({title, children}) => (
    <S.Wrapper>
        <CloseButton />
        <S.Header>
            <S.Title>{title}</S.Title>
        </S.Header>
        <S.Body>
            {children}
        </S.Body>
    </S.Wrapper>
)

export default Popover
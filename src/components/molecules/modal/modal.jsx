import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as S from './modal.styled'

const Modal = ({children, onClose}) => (
    <S.Overlay>
        <S.Wrapper>
            <S.CloseButton icon={faTimes} onClick={onClose} />
            {children}
        </S.Wrapper>
    </S.Overlay>
)

export default Modal
import React from 'react'
import CloseButton from 'components/atoms/close-button/close-button'
import { Overlay, Wrapper } from './modal.styled'

const Modal = ({children, onClose}) => (
    <Overlay>
        <Wrapper>
            <CloseButton onClose={onClose} />
            {children}
        </Wrapper>
    </Overlay>
)

export default Modal
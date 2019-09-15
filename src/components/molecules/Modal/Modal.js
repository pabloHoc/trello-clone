import React from 'react'
import CloseButton from 'components/atoms/CloseButton/CloseButton'
import { Overlay, Wrapper } from './styled'

const Modal = ({children, onClose}) => (
    <Overlay>
        <Wrapper>
            <CloseButton onClose={onClose} />
            {children}
        </Wrapper>
    </Overlay>
)

export default Modal
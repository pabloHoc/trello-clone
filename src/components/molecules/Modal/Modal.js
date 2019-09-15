import React from 'react'
import CloseButton from 'components/atoms/CloseButton/CloseButton'
import './Modal.scss'

const Modal = ({children, onClose}) => (
    <div className='overlay'>
        <div className='modal'>
            <CloseButton onClose={onClose} />
            {children}
        </div>
    </div>
)

export default Modal;
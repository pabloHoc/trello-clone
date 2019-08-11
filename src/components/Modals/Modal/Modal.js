import React from 'react'
import CloseButton from 'components/CloseButton/CloseButton'
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
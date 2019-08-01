import React from 'react'
import ButtonGroup from 'components/ButtonGroup/ButtonGroup'
import Button from 'components/Button/Button'
import Comment from 'components/Comment/Comment'
import List from 'components/List/List'
import './Modal.scss'

const comments = [
    {
        text: 'asdasd'
    },
    {
        text: 'asdasd'
    }
]

const Modal = () => (
    <div className='overlay'>
        <div className='modal'>
            <div className='buttons-container'>
                <ButtonGroup title='Añadir a la tarjeta'>
                    <Button text='Etiquetas' />
                    <Button text='Checklist' />
                </ButtonGroup>
                <ButtonGroup title='Acciones'>
                    <Button text='Mover' />
                    <Button text='Copiar' />
                    <Button text='Archivar' />
                </ButtonGroup>
            </div>
            <List 
                name='comments' 
                items={comments} 
                itemRenderer={Comment} 
            />
        </div>
    </div>
)

export default Modal;
import React from 'react'
import {faAlignLeft, faTag, faArrowRight, faList} from '@fortawesome/free-solid-svg-icons'
import {faStickyNote, faComment, faUser, faCheckSquare, faCopy, faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import ButtonGroup from 'components/ButtonGroup/ButtonGroup'
import Button, {BUTTON_TYPES, BUTTON_SIZES} from 'components/Button/Button'
import Comment from 'components/Comment/Comment'
import TitleWithIcon, {TITLE_SIZE} from 'components/TitleWithIcon/TitleWithIcon'
import AddInputControl, {INPUT_ELEMENTS} from 'components/AddInputControl/AddInputControl'
import CloseButton from 'components/CloseButton/CloseButton'
import './Modal.scss'

const comments = [
    {
        id: 1,
        text: 'asdasd',
        username: 'Ada Lovelace'
    },
    {
        id: 2,
        text: 'asdasd',
        username: 'Ada Lovelace'
    }
]

const Modal = () => (
    <div className='overlay'>
        <div className='modal'>
            <CloseButton />
            <div className='modal-header'>
                <TitleWithIcon icon={faStickyNote} title='Titulo' size={TITLE_SIZE.BIG} />
            </div>
            <div className='modal-body'>
                <div className='main-content'>
                    <div className='control-section'>
                        <TitleWithIcon icon={faAlignLeft} title='Descripción' size={TITLE_SIZE.MEDIUM} />
                        <AddInputControl 
                            inputElement={INPUT_ELEMENTS.TEXTAREA}
                            placeholder='Introduzca una descripción'
                            buttonType={BUTTON_TYPES.PRIMARY}
                            buttonSize={BUTTON_SIZES.SHRINK}
                            buttonText='Editar descripción'
                        />
                    </div>
                    <div className='control-section'>
                        <TitleWithIcon icon={faComment} title='Comentarios' size={TITLE_SIZE.MEDIUM} />
                        <AddInputControl 
                            inputElement={INPUT_ELEMENTS.TEXTAREA}
                            placeholder='Introduzca un comentario para esta tarjeta'
                            buttonType={BUTTON_TYPES.DEFAULT}
                            buttonSize={BUTTON_SIZES.SHRINK}
                            buttonText='Añadir comentario'
                        />
                        <TitleWithIcon icon={faList} title='Actividad' size={TITLE_SIZE.MEDIUM} />
                        {
                        comments.map(comment =>
                                <Comment 
                                    key={comment.id}
                                    text={comment.text}
                                    username={comment.username}
                                />    
                            )
                        }
                    </div>
                </div>
                <div className='buttons-container'>
                    <ButtonGroup title='Añadir a la tarjeta'>
                        <Button type={BUTTON_TYPES.DEFAULT} size={BUTTON_SIZES.EXPAND} text='Miembros' icon={faUser} />
                        <Button type={BUTTON_TYPES.DEFAULT} size={BUTTON_SIZES.EXPAND} text='Etiquetas' icon={faTag} />
                        <Button type={BUTTON_TYPES.DEFAULT} size={BUTTON_SIZES.EXPAND} text='Checklist' icon={faCheckSquare} />
                    </ButtonGroup>
                    <ButtonGroup title='Acciones'>
                        <Button type={BUTTON_TYPES.DEFAULT} size={BUTTON_SIZES.EXPAND} text='Mover' icon={faArrowRight} />
                        <Button type={BUTTON_TYPES.DEFAULT} size={BUTTON_SIZES.EXPAND} text='Copiar' icon={faCopy} />
                        <Button type={BUTTON_TYPES.DEFAULT} size={BUTTON_SIZES.EXPAND} text='Archivar' icon={faTrashAlt} />
                    </ButtonGroup>
                </div>
            </div>
        </div>
    </div>
)

export default Modal;
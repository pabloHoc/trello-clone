import React from 'react'
import {faComment} from '@fortawesome/free-regular-svg-icons'
import TitleWithIcon, {TITLE_SIZE} from 'components/atoms/TitleWithIcon/TitleWithIcon'
import AddInputWithToggle from 'components/molecules/AddInputWithToggle/AddInputWithToggle'
import {BUTTON_TYPES} from 'components/atoms/Button/Button'

const CardModalAddComment = ({onAddComment}) => (
    <>  
        <TitleWithIcon icon={faComment} title='Comentarios' size={TITLE_SIZE.MEDIUM} />
        <AddInputWithToggle 
            type='textarea'
            placeholder='Introduzca un comentario para esta tarjeta'
            buttonType={BUTTON_TYPES.DEFAULT}
            buttonText='Añadir comentario'
            onAddValue={onAddComment}
            hasToggle={false}
        />
    </>        
)

export default CardModalAddComment
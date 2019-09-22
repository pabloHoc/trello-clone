import React from 'react'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import TitleWithIcon, { TITLE_SIZE } from 'components/atoms/icon-title/icon-title'
import AddInputWithToggle from 'components/molecules/add-input-with-toggle/add-input-with-toggle'
import { BUTTON_TYPES } from 'components/atoms/button/button'
import * as S from './add-comment.styled'

const CardModalAddComment = ({onAddComment, className}) => (
    <S.Wrapper className={className}>  
        <TitleWithIcon icon={faComment} title='Comentarios' size={TITLE_SIZE.MEDIUM} />
        <AddInputWithToggle 
            type='textarea'
            placeholder='Introduzca un comentario para esta tarjeta'
            buttonType={BUTTON_TYPES.DEFAULT}
            buttonText='Añadir comentario'
            onAddValue={onAddComment}
            hasToggle={false}
        />
    </S.Wrapper>        
)

export default CardModalAddComment
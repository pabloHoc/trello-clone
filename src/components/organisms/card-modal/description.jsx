import React from 'react'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import IconTitle, { TITLE_SIZE } from 'components/atoms/icon-title/icon-title'
import AddInputWithToggle from 'components/molecules/add-input-with-toggle/add-input-with-toggle'
import * as S from './description.styled'

const CardModalDescription = ({description, onEditDescription, className}) => (
    <S.Wrapper className={className}>
        <IconTitle icon={faAlignLeft} title='Descripción' size={TITLE_SIZE.MEDIUM} />
        <AddInputWithToggle 
            type='textarea'
            placeholder='Introduzca una descripción'
            buttonText='Editar descripción'
            onAddValue={onEditDescription}
        >
            <S.DescriptionBox>{description || 'Añadir una descripción más detallada...'}</S.DescriptionBox>
        </AddInputWithToggle>
    </S.Wrapper>
)

export default CardModalDescription
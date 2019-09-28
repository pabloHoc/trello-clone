import React from 'react'
import { faTag, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faUser, faCheckSquare, faCopy, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import ButtonGroup from 'components/molecules/button-group/button-group'
import Button from 'components/atoms/button'
import * as S from './actions.styled'

const CardModalActions = () => (
    <S.Wrapper>
        <ButtonGroup title='Añadir a la tarjeta'>
            <Button default expand icon={faUser}>Miembros</Button>
            <Button default expand icon={faTag}>Etiquetas</Button>
            <Button default expand icon={faCheckSquare}>Checklist</Button>
        </ButtonGroup>
        <ButtonGroup title='Acciones'>
            <Button default expand icon={faArrowRight}>Mover</Button>
            <Button default expand icon={faCopy}>Copiar</Button>
            <Button default expand icon={faTrashAlt}>Archivar</Button>
        </ButtonGroup>
    </S.Wrapper>
)

export default CardModalActions
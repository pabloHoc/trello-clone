import React from 'react'
import { faTag, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faUser, faCheckSquare, faCopy, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import ButtonGroup from 'components/molecules/ButtonGroup/ButtonGroup'
import Button, { BUTTON_TYPES, BUTTON_SIZES } from 'components/atoms/Button/Button'
import { Wrapper } from './styled'

const CardModalActions = () => (
    <Wrapper>
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
    </Wrapper>
)

export default CardModalActions
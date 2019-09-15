import React from 'react'
import {faAlignLeft} from '@fortawesome/free-solid-svg-icons'
import TitleWithIcon, {TITLE_SIZE} from 'components/atoms/TitleWithIcon/TitleWithIcon'
import AddInputWithToggle from 'components/molecules/AddInputWithToggle/AddInputWithToggle'
import {BUTTON_TYPES, BUTTON_SIZES} from 'components/atoms/Button/Button'
import './CardModalDescription.scss';

const CardModalDescription = ({description, onEditDescription}) => (
    <>
        <TitleWithIcon icon={faAlignLeft} title='Descripción' size={TITLE_SIZE.MEDIUM} />
        <AddInputWithToggle 
            type='textarea'
            placeholder='Introduzca una descripción'
            buttonType={BUTTON_TYPES.PRIMARY}
            buttonSize={BUTTON_SIZES.SHRINK}
            buttonText='Editar descripción'
            onAddValue={onEditDescription}
        >
            <div className='description-box'>{description || 'Añadir una descripción más detallada...'}</div>
        </AddInputWithToggle>
    </>
)

export default CardModalDescription
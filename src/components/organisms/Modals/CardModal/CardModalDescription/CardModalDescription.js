import React from 'react'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import TitleWithIcon, { TITLE_SIZE } from 'components/atoms/TitleWithIcon/TitleWithIcon'
import AddInputWithToggle from 'components/molecules/AddInputWithToggle/AddInputWithToggle'
import { BUTTON_TYPES, BUTTON_SIZES } from 'components/atoms/Button/Button'
import { DescriptionBox } from './styled'
import withWrapper from 'helpers/withWrapper'

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
            <DescriptionBox>{description || 'Añadir una descripción más detallada...'}</DescriptionBox>
        </AddInputWithToggle>
    </>
)

export default withWrapper(CardModalDescription)
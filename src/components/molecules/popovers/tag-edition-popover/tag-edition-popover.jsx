import React from 'react'
import Popover from 'components/molecules/popovers/popover/popover'
import Button, { BUTTON_TYPES } from 'components/atoms/button/button'
import TextInput from 'components/atoms/textinput/textinput'

export const TAG_ACTION = {
    EDIT: {
        name: 'edit',
        title: 'Cambiar etiqueta',
        button: 'Guardar'
    },
    CREATE: {
        name: 'create',
        title: 'Crear etiqueta',
        button: 'Crear'
    }
}

const TagEditionPopover = ({action}) => (
    <Popover title={action.title}>
        <TextInput label='Nombre' />
        <Button type={BUTTON_TYPES.PRIMARY} text={action.button}/>
    </Popover>
)

export default TagEditionPopover
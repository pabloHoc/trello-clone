import React from 'react'
import Popover from 'components/molecules/popovers/popover/popover'
import Button from 'components/atoms/button'
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

const TagEditionPopover = ({action: {title, action}}) => (
    <Popover title={title}>
        <TextInput label='Nombre' />
        <Button primary>{action}</Button>
    </Popover>
)

export default TagEditionPopover
import React from 'react'
import Popover from 'components/Popover/Popover';
import TagSelection from 'components/organisms/TagSelection/TagSelection';
import './TagSelectionPopover.scss'

const TagSelectionPopover = () => (
    <Popover title='Etiquetas'>
        <TagSelection />
    </Popover>
)

export default TagSelectionPopover
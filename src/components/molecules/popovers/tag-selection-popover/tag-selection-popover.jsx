import React from 'react'
import Popover from 'components/popover/popover'
import TagSelection from 'components/organisms/tag-selection/tag-selection';

const TagSelectionPopover = () => (
    <Popover title='Etiquetas'>
        <TagSelection />
    </Popover>
)

export default TagSelectionPopover
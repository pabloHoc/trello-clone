import React from 'react'
import * as PopoverWrapper from 'react-awesome-popover'
import Tag, {TAG_SIZES} from 'components/molecules/Tag/Tag'
import { BUTTON_TYPES, BUTTON_SIZES } from 'components/atoms/Button/Button'
import TagEditionPopover, { TAG_ACTION } from 'components/molecules/Popovers/TagEditionPopover/TagEditionPopover'
import { Wrapper, TextInput, Button } from './styled'
import tags from 'tags'


const TagSelection = () => (
    <Wrapper>
        <TextInput placeholder='Buscar etiquetas...' />
        {
            tags.map(tag =>
            <PopoverWrapper key={tag.id} placement='bottom'>
                <Tag 
                    size={TAG_SIZES.BIG}
                    color={tag.color}
                    name={tag.name}
                /> 
                <TagEditionPopover action={TAG_ACTION.EDIT} />
            </PopoverWrapper>
            )
        }
        <PopoverWrapper placement='bottom'>
            <Button
                type={BUTTON_TYPES.DEFAULT}
                size={BUTTON_SIZES.SHRINK} 
                text='Crear una etiqueta nueva'
                className='add-tag-btn'
            />
            <TagEditionPopover action={TAG_ACTION.CREATE} />
        </PopoverWrapper>                
    </Wrapper>  
)

export default TagSelection
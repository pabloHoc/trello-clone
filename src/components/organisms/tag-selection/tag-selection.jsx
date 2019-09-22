import React from 'react'
import * as PopoverWrapper from 'react-awesome-popover'
import Tag, {TAG_SIZES} from 'components/molecules/tag/tag'
import { BUTTON_TYPES, BUTTON_SIZES } from 'components/atoms/button/button'
import TagEditionPopover, { TAG_ACTION } from 'components/molecules/popovers/tag-edition-popover/tag-edition-popover'
import * as S from './tag-selection.styled'
import tags from 'tags'


const TagSelection = () => (
    <S.Wrapper>
        <S.TextInput placeholder='Buscar etiquetas...' />
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
            <S.Button
                type={BUTTON_TYPES.DEFAULT}
                size={BUTTON_SIZES.SHRINK} 
                text='Crear una etiqueta nueva'
                className='add-tag-btn'
            />
            <TagEditionPopover action={TAG_ACTION.CREATE} />
        </PopoverWrapper>                
    </S.Wrapper>  
)

export default TagSelection
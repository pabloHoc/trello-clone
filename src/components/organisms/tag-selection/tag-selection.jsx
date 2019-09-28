import React from 'react'
import * as PopoverWrapper from 'react-awesome-popover'
import Tag, {TAG_SIZES} from 'components/molecules/tag/tag'
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
            <S.Button default className='add-tag-btn'>Crear una etiqueta nueva</S.Button>
            <TagEditionPopover action={TAG_ACTION.CREATE} />
        </PopoverWrapper>                
    </S.Wrapper>  
)

export default TagSelection
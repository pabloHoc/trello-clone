import React from 'react'
import Tag, {TAG_TYPES} from 'components/Tag/Tag'
import tags from 'tags'
import './Panel.scss'
import Button, { BUTTON_TYPES, BUTTON_SIZES } from 'components/Button/Button'
import CloseButton from 'components/CloseButton/CloseButton'

const Panel = () => (
    <div className='panel'>
        <CloseButton />
        <p className='title'>Etiquetas</p>
        <div className='tags'>
            {
                tags.map(tag => 
                <Tag 
                    key={tag.id}
                    type={TAG_TYPES.BIG}
                    color={tag.color}
                    name={tag.name}
                /> 
                )
            }
            <Button
                type={BUTTON_TYPES.DEFAULT}
                size={BUTTON_SIZES.SHRINK} 
                text='Crear una etiqueta nueva'
                className='add-tag-btn'
            />
        </div>

    </div>
)

export default Panel;
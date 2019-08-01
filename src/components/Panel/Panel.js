import React from 'react'
import Tag, {TAG_TYPES} from 'components/Tag/Tag'
import tags from 'tags'
import './Panel.scss'

const Panel = () => (
    <div className='panel'>
        <p className='title'>Etiquetas</p>
        <div className='tags'>
            {
                tags.map(tag => 
                <Tag 
                    key={tag.id}
                    type={TAG_TYPES.BIG}
                    {...tag}
                /> 
                )
            }
        </div>

    </div>
)

export default Panel;
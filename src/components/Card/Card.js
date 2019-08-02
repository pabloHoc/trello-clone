import React from 'react'
import Tag, {TAG_TYPES} from 'components/Tag/Tag'
import './Card.scss'

const Card = ({tags, title, text}) => (
    <div className='card'>
        <div className='tags'>
            {
                tags.map(tag => 
                <Tag 
                    key={tag.id}
                    type={TAG_TYPES.SMALL}
                    color={tag.color}
                    name={tag.name}
                /> 
                )
            }
        </div>
        <p>{title}</p>
    </div>
);
 
export default Card;
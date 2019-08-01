import React from 'react'
import Tag, {TAG_TYPES} from 'components/Tag/Tag'
import './Card.scss'

const Card = props => (
    <div className='card'>
        {
            props.tags.length !== 0 &&
            <div className='tags'>
                {
                    props.tags.map(tag => 
                    <Tag 
                        key={tag.id}
                        type={TAG_TYPES.SMALL}
                        {...tag}
                    /> 
                    )
                }
            </div>
        }
        <p>{props.title}</p>
    </div>
);
 
export default Card;
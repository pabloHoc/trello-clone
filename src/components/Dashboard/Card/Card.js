import React from 'react'
import Tag from 'components/Tag/Tag'
import './Card.scss'

const Card = props => (
    <div className='card'>
        <div className='tags'>
            {
                props.tags.map(tag => <Tag 
                    key={tag.id}
                    name={tag.name}
                    color={tag.color}
                />)
            }
        </div>
        <p><b>{props.title}</b></p>
        <p>{props.text}</p>
    </div>
)

export default Card
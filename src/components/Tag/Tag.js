import React from 'react'
import './Tag.scss'

const Tag = props => (
    <div 
        className={props.type}
        style={{backgroundColor: props.color}}
    >
         {props.name}
    </div>
)

export const TAG_TYPES = {
    BIG: 'tag-big',
    SMALL: 'tag-small'
}

export default Tag
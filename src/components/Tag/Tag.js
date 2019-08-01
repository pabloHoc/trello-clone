import React from 'react'
import './Tag.scss'

const Tag = props => (
    <div 
        className='tag'
        style={{backgroundColor: props.color}}
    >
         {props.name}
    </div>
)

export default Tag
import React from 'react'
import Tag from 'components/Tag/Tag'

const TagList = ({tags, size}) => (
    tags.map(tag => 
        <Tag 
            key={tag.id}
            size={size}
            color={tag.color}
            name={tag.name}
        /> 
    )
)

export default TagList
import React from 'react'
import './Comment.scss'

const Comment = props => (
    <div className='comment'>
        {props.text}
    </div>
)

export default Comment
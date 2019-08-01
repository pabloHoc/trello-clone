import React from 'react'

const List = props => (
    <div className={`${props.name}-list`}>
        {
            props.items.map((item, index) => {
                let newProps = Object.assign({ key: index }, item)
                return React.createElement(props.itemRenderer, newProps)
            })
        }
    </div>
)

export default List
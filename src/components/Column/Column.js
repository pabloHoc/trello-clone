import React from 'react'
import Card from 'components/Card/Card'
import AddCard from 'components/AddCard/AddCard';
import './Column.scss'

const Column = props => (
    <div className='column'>
        <p className='title'>{props.title}</p>
        {
            props.cards.map(card => <Card 
                key={card.id}
                title={card.title} 
                text={card.text}
                tags={card.tags} 
            />)
        }
        <AddCard />   
    </div>
)

export default Column

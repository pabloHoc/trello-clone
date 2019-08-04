import React from 'react'
import Card from 'components/Card/Card'
import AddInputControl, {INPUT_ELEMENTS} from 'components/AddInputControl/AddInputControl'
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
                comments={card.comments}
            />)
        }
        <AddInputControl 
            inputElement={INPUT_ELEMENTS.TEXTAREA}
            placeholder='Introduzca un título para esta tarjeta'
            buttonText='Añadir tarjeta'
        />   
    </div>
)

export default Column

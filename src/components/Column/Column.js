import React from 'react'
import AddInputWithToggle from 'components/AddInputWithToggle/AddInputWithToggle'
import CardList from 'components/Lists/CardList/CardList'
import Card from 'models/Card'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './Column.scss'

class Column extends React.Component {
    state = {
        cards: []
    }
    addCard = title => {
        this.setState({ cards: [...this.state.cards, new Card(title)]})
    }
    render(){
        const {title} = this.props
        return (
            <div className='column'>
                <p className='title'>{title}</p>
                <CardList cards={this.state.cards} />
                <AddInputWithToggle 
                    type='textarea'
                    placeholder='Introduzca un título para esta tarjeta'
                    buttonText='Añadir tarjeta'
                    onAddValue={this.addCard}
                >
                    <div className='add-card-toggle'>
                        <FontAwesomeIcon icon={faPlus} />
                        Añada una tarjeta
                    </div>
                </AddInputWithToggle>   
            </div>
        )
    }
}

export default Column

import React from 'react'
import { connect } from 'react-redux'
import Card from 'js/models/Card'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addCard } from "js/actions"
import { Wrapper, Title, CardList, ToggeableInput, AddCardToggle, Icon } from './styled'

const mapDispatchToProps = dispatch => {
    return {
      addCard: card => dispatch(addCard(card))
    };
}

const ConnectedColumn = ({title, id, addCard}) => (
    <Wrapper>
        <Title>{title}</Title>
        <CardList columnId={id} />
        <ToggeableInput 
            type='textarea'
            placeholder='Introduzca un título para esta tarjeta'
            buttonText='Añadir tarjeta'
            onAddValue={cardTitle => addCard(new Card(cardTitle, id))}
        >
            <AddCardToggle>
                <Icon icon={faPlus} />
                Añada una tarjeta
            </AddCardToggle>
        </ToggeableInput>   
    </Wrapper>
)

const Column = connect(null, mapDispatchToProps)(ConnectedColumn)
export default Column

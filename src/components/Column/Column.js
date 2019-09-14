import React from 'react'
import { connect } from 'react-redux'
import AddInputWithToggle from 'components/AddInputWithToggle/AddInputWithToggle'
import CardList from 'components/Lists/CardList/CardList'
import Card from 'models/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addCard } from "js/actions"
import * as Styled from './styled'

const mapDispatchToProps = dispatch => {
    return {
      addCard: card => dispatch(addCard(card))
    };
}

const ConnectedColumn = ({title, id, addCard}) => (
    <Styled.Column>
        <Styled.Title>{title}</Styled.Title>
        <Styled.CardListWrapper>
            <CardList columnId={id} />
        </Styled.CardListWrapper>
        <Styled.AddInputWrapper>
            <AddInputWithToggle 
                type='textarea'
                placeholder='Introduzca un título para esta tarjeta'
                buttonText='Añadir tarjeta'
                onAddValue={cardTitle => addCard(new Card(cardTitle, id))}
            >
                <Styled.AddCardToggle>
                    <Styled.IconWrapper>
                        <FontAwesomeIcon icon={faPlus} />
                    </Styled.IconWrapper>
                    Añada una tarjeta
                </Styled.AddCardToggle>
            </AddInputWithToggle>   
        </Styled.AddInputWrapper>
    </Styled.Column>
)

const Column = connect(null, mapDispatchToProps)(ConnectedColumn)
export default Column

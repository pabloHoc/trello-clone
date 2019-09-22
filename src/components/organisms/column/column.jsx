import React from 'react'
import { connect } from 'react-redux'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Card from 'js/models/card'
import { addCard } from 'js/actions'
import * as S from './column.styled'

const mapDispatchToProps = dispatch => {
    return {
      addCard: card => dispatch(addCard(card))
    };
}

const ConnectedColumn = ({title, id, addCard}) => (
    <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.CardList columnId={id} />
        <S.ToggeableInput 
            type='textarea'
            placeholder='Introduzca un título para esta tarjeta'
            buttonText='Añadir tarjeta'
            onAddValue={cardTitle => addCard(new Card(cardTitle, id))}
        >
            <S.AddCardToggle>
                <S.Icon icon={faPlus} />
                Añada una tarjeta
            </S.AddCardToggle>
        </S.ToggeableInput>   
    </S.Wrapper>
)

const Column = connect(null, mapDispatchToProps)(ConnectedColumn)
export default Column

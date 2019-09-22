import React from 'react'
import { connect } from 'react-redux'
import Card from 'components/molecules/card/card'
import * as S from './card-list.styled'

const mapStateToProps = (state, props) => {
    return { cards: state.cards.filter(card => card.columnId === props.columnId) }
}

const ConnectedCardList = ({cards, columnId, className}) => (
    <S.Wrapper className={className}>
        {
            cards.map(card => <Card 
                key={card.id}
                title={card.title} 
                text={card.text}
                tags={card.tags}
                comments={card.comments}
            />)
        }
    </S.Wrapper>
)

const CardList = connect(mapStateToProps)(ConnectedCardList)

export default CardList
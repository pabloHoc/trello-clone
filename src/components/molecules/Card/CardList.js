import React from 'react'
import { connect } from 'react-redux'
import Card from 'components/molecules/Card/Card'
import withWrapper from 'helpers/withWrapper'

const mapStateToProps = (state, props) => {
    return { cards: state.cards.filter(card => card.columnId === props.columnId) }
}

const ConnectedCardList = ({cards, columnId}) => (
    cards.map(card => <Card 
        key={card.id}
        title={card.title} 
        text={card.text}
        tags={card.tags}
        comments={card.comments}
    />)
)

const CardList = connect(mapStateToProps)(ConnectedCardList)

export default withWrapper(CardList)
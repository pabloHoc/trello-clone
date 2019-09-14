import React from 'react'
import { connect } from 'react-redux'
import Column from 'components/Column/Column'

const mapStateToProps = state => {
    return { columns: state.columns }
}

const ConnectedList = ({columns}) => (
    columns.map(column => <Column 
        key={column.id}
        id={column.id}
        title={column.title}
        cards={column.cards}
    />)
)

const ColumnList = connect(mapStateToProps)(ConnectedList);

export default ColumnList
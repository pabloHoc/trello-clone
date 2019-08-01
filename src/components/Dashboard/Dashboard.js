import React from 'react'
import Column from 'components/Column/Column'
import AddColumn from 'components/AddColumn/AddColumn';
import columns from 'data'
import './Dashboard.scss'

const Dashboard = props => (
    <div className='dashboard'>
        <h2 className='title'>{props.title}</h2>
        <div className='columns'>
            {
                // js
                columns.map(column => <Column 
                    key={column.id}
                    title={column.title}
                    cards={column.cards}
                />)
            }        
            <AddColumn />    
        </div>
    </div>
)

export default Dashboard
import React from 'react'
import Column from 'components/Column/Column'
import AddColumn from 'components/AddColumn/AddColumn';
import columns from 'data'
import './Dashboard.scss'

const Dashboard = () => (
    <div className='dashboard'>
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
)

export default Dashboard
import React from 'react'
import Column from 'components/Column/Column'
import AddInputControl, {INPUT_ELEMENTS} from 'components/AddInputControl/AddInputControl';
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
            <AddInputControl 
                inputElement={INPUT_ELEMENTS.TEXT}
                placeholder='Introduzca un título para esta tarjeta'
                buttonText='Añadir tarjeta'
            />        
        </div>
    </div>
)

export default Dashboard
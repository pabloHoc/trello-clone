import React from 'react'
import ColumnList from 'components/Lists/ColumnList/ColumnList'
import AddInputWithToggle from 'components/AddInputWithToggle/AddInputWithToggle';
import Column from 'models/Column'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './Dashboard.scss'

class Dashboard extends React.Component {
    state = {
        columns: []
    }
    addColumn = title => {
        this.setState({ columns: [...this.state.columns, new Column(title)]})
    }
    render() {
        const {title} = this.props
        return (
            <div className='dashboard'>
                <h2 className='title'>{title}</h2>
                <div className='columns'>
                    <ColumnList columns={this.state.columns} />    
                    <AddInputWithToggle 
                        type='text'
                        placeholder='Introduzca un título de la lista'
                        buttonText='Añadir lista'
                        onAddValue={this.addColumn}
                    >
                        <div className='add-column-toggle'>
                            <FontAwesomeIcon icon={faPlus} />
                            Añada una lista
                        </div>
                    </AddInputWithToggle>        
                </div>
            </div>
        )
    }   
}

export default Dashboard
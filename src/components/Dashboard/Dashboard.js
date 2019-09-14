import React from 'react'
import { connect } from "react-redux"
import ColumnList from 'components/Lists/ColumnList/ColumnList'
import AddInputWithToggle from 'components/AddInputWithToggle/AddInputWithToggle';
import Column from 'models/Column'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addColumn } from "js/actions"
import './Dashboard.scss'

const mapDispatchToProps = dispatch => {
  return {
    addColumn: column => dispatch(addColumn(column))
  };
}

class ConnectedDashboard extends React.Component {
    addColumn = title => {
        this.props.addColumn(new Column(title))
    }
    render() {
        const {title} = this.props
        return (
            <div className='dashboard'>
                <h2 className='title'>{title}</h2>
                <div className='columns'>
                    <ColumnList />    
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

const Dashboard = connect(null, mapDispatchToProps)(ConnectedDashboard);

export default Dashboard
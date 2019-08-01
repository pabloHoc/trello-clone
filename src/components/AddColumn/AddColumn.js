import React from 'react'
import './AddColumn.scss'

const AddColumn = () => (
    <div className='add-column-control'>
            <input
                type='text'
                className='column-title-input' 
                placeholder='Introduzca un título para esta columna'
            />
            <div>
                <div className='add-column-button'>
                    Añadir columna
                </div>
            </div>
        </div>
);
 
export default AddColumn;
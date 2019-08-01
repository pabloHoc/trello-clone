import React from 'react';
import './AddCard.scss'

const AddCard = () => (
    <div className='add-card-control'>
        <div className='add-card-form'>
            <textarea
                className='card-title-input' 
                placeholder='Introduzca un título para esta tarjeta'
            />
            <div>
                <div className='add-card-button'>
                    Añadir tarjeta
                </div>
            </div>
        </div>
    </div>
);
 
export default AddCard;
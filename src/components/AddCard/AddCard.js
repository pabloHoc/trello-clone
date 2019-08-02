import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis, faAdjust } from '@fortawesome/free-solid-svg-icons'
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
                    <FontAwesomeIcon 
                        icon={faCannabis}
                        color='red'
                        spin/>
                    Añadir tarjeta
                </div>
            </div>
        </div>
    </div>
);
 
export default AddCard;
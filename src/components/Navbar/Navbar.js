import React from 'react'
import './Navbar.scss'
import Button, { BUTTON_SIZES, BUTTON_TYPES } from 'components/Button/Button'
import { faHome, faChalkboard, faBars } from '@fortawesome/free-solid-svg-icons'
import { PanelContextConsumer } from 'components/Contexts/PanelContext'

const Navbar = () => (
    <div className='navbar'>
        <div className='left-buttons'>
            <Button 
                type={BUTTON_TYPES.LIGHT} 
                size={BUTTON_SIZES.ICON} 
                icon={faHome} 
            />
            <Button 
                type={BUTTON_TYPES.LIGHT} 
                size={BUTTON_SIZES.SHRINK} 
                icon={faChalkboard}
                text='Tableros' 
            />
        </div>
        <PanelContextConsumer>
        {
            ({openPanel}) => (
                <Button 
                    type={BUTTON_TYPES.LIGHT} 
                    size={BUTTON_SIZES.ICON} 
                    icon={faBars}
                    onClick={openPanel}
                />
            )
        }    
        </PanelContextConsumer>
    </div>
)

export default Navbar
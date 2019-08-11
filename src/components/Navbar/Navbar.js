import React from 'react'
import './Navbar.scss'
import Button, { BUTTON_SIZES, BUTTON_TYPES } from 'components/Button/Button';
import {faHome, faChalkboard} from '@fortawesome/free-solid-svg-icons'
import MenuButton from 'components/MenuButton/MenuButton'

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
        <MenuButton />
    </div>
)

export default Navbar
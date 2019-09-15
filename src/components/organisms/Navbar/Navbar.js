import React from 'react'
import Button, { BUTTON_SIZES, BUTTON_TYPES } from 'components/atoms/Button/Button'
import { faHome, faChalkboard, faBars } from '@fortawesome/free-solid-svg-icons'
import { PanelContextConsumer } from 'components/Contexts/PanelContext'
import { withRouter } from 'react-router-dom'
import { Wrapper, FlexWrapper } from './styled'

const Navbar = props => (
    <Wrapper>
        <FlexWrapper>
            <Button 
                type={BUTTON_TYPES.LIGHT} 
                size={BUTTON_SIZES.ICON} 
                icon={faHome}
                onClick={() => props.history.push('/home')} 
            />
            <Button 
                type={BUTTON_TYPES.LIGHT} 
                size={BUTTON_SIZES.SHRINK} 
                icon={faChalkboard}
                text='Tableros' 
            />
        </FlexWrapper>
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
    </Wrapper>
)

export default Navbar
import React from 'react'
import Button, { BUTTON_SIZES, BUTTON_TYPES } from 'components/atoms/button/button'
import { faHome, faChalkboard, faBars } from '@fortawesome/free-solid-svg-icons'
import { PanelContextConsumer } from 'components/Contexts/PanelContext'
import { withRouter } from 'react-router-dom'
import * as S from './navbar.styled'

const Navbar = props => (
    <S.Wrapper>
        <S.FlexWrapper>
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
        </S.FlexWrapper>
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
    </S.Wrapper>
)

export default Navbar
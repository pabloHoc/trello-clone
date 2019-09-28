import React from 'react'
import Button from 'components/atoms/button'
import { PanelContextConsumer } from 'components/Contexts/PanelContext'
import { withRouter } from 'react-router-dom'
import { Wrapper, FlexWrapper, HomeButton, PanelButton, ChalkboardIcon, HomeIcon, BarsIcon } from './navbar.styled'

const Navbar = props => (
    <Wrapper>
        <FlexWrapper>
            <HomeButton light shrink onClick={() => props.history.push('/home')}>
                <HomeIcon />
            </HomeButton>
            <Button light>
                <ChalkboardIcon />
                Tableros
            </Button>
        </FlexWrapper>
        <PanelContextConsumer>
        {
            ({openPanel}) => (
                <PanelButton light shrink onClick={openPanel} >
                    <BarsIcon />
                </PanelButton>
            )
        }
        </PanelContextConsumer>
    </Wrapper>
)

export default Navbar
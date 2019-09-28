import styled from 'styled-components/macro'
import Button from 'components/atoms/button'
import { Home, Chalkboard, Bars } from 'styled-icons/fa-solid'

const NAVBAR_ICON_SIZE = '20px';

export const Wrapper = styled.nav`
    height: 40px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 0 10px;
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 99;
`

export const FlexWrapper = styled.div`
    display: flex;
`

export const ChalkboardIcon = styled(Chalkboard)`
    width: ${NAVBAR_ICON_SIZE};
    margin-right: 5px;
`

export const HomeIcon = styled(Home)`
    width: ${NAVBAR_ICON_SIZE};
`

export const BarsIcon = styled(Bars)`
    width: 13px;
`

export const HomeButton = styled(Button)`
    margin-right: 5px;
    padding: 0 8px;
`

export const PanelButton = styled(Button)`
    padding: 0 11px;
`
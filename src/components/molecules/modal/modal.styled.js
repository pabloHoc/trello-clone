import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Shared from 'styles/shared'

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 999;
`

export const Wrapper = styled.div`
    background-color: #f4f5f7;
    border-radius: 2px;
    width: 600px;
    min-height: 500px;
    margin-top: 20px;
    padding: 10px 20px;
    position: relative;
`

export const CloseButton = styled(FontAwesomeIcon)`
    ${Shared.closeButton}
`
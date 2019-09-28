import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Shared from 'styles/shared'

export const Wrapper = styled.div`
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    overflow: hidden;
    width: 304px;
    z-index: 70;
    position: relative;
    margin-top: 5px;
`

export const Header = styled.div`
    height: 40px;
    position: relative;
    margin-bottom: 8px;
    text-align: center;
`

export const Title = styled.div`
    box-sizing: border-box;
    color: #6b778c;
    display: block;
    line-height: 40px;
    border-bottom: 1px solid rgba(9,30,66,.13);
    margin: 0 12px;
    overflow: hidden;
    padding: 0 32px;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 1;
`

export const Body = styled.div`
    padding: 0 12px 12px;
`

export const CloseButton = styled(FontAwesomeIcon)`
    ${Shared.closeButton}
`
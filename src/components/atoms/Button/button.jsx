import styled from 'styled-components/macro'
import { bindStyles } from 'styled-props'

const buttonStyles = {
    color: {
        primary: '#FFFFFF',
        default: '#172b4d',
        light: '#FFFFFF'
    },
    background: {
        primary: '#5aac44',
        default: '#091e420a',
        light: '#ffffff4d'
    },
    hover: {
        primary: '#61bd4f',
        default: '#091e4214',
        light: '#ffffff33'
    },
    active: {
        primary: '#49852e',
        default: '#e4f0f6',
        light: '#ffffff1a'
    },
    radius: {
        primary: '5px',
        default: '3px',
        light: '3px',
    },
    padding: {
        primary: '5px 15px',
        default: '6px 12px',
        light: '0 12px',
        shrink: '0'
    },
    fontWeight: {
        primary: '700',
        default: '300',
        light: '700',
    },
    width: {
        shrink: 'auto',
        expand: '100%'
    },
    alignment: {
        primary: 'center',
        default: 'flex-start',
        light: 'center',
    },
}

const s = bindStyles(buttonStyles)

const Button = styled.button`
    width: ${s.width};
    height: 32px;
    min-width: 32px;
    
    display: flex;
    justify-content: ${s.alignment};
    align-items: 'center';

    background: ${s.background};
    border: none;
    border-radius: ${s.radius};
    
    padding: ${s.padding};
    box-sizing: border-box;
    overflow: hidden;

    color: ${s.color};
    font-weight: ${s.fontWeight};
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    cursor: pointer;
    user-select: none;
    transition: .15s;
    box-shadow: none;
    outline: none;

    :hover {
        background: ${s.hover}; 
    }

    :active {
        background: ${s.active}; 
    }
`

Button.defaultProps = {
    width: 'shrink',
    background: 'default',
    color: 'default',
    borderRadius: 'default',
    padding: 'default',
    alignment: 'default',
    fontWeight: 'default'
}

export default Button
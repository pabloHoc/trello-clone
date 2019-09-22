import styled from 'styled-components/macro'

export const Wrapper = styled.div``

export const Label = styled.label`
    font-weight: 700;
    color: #6b778c;
    font-size: 12px;
    line-height: 16px;
    margin-top: 12px;
    margin-bottom: 6px;
    display: block;
`

export const Input = styled.input`
    background: #fff;
    border: none;
    box-shadow: inset 0 0 0 2px #0079bf;
    display: block;
    margin: 0;
    transition: margin 85ms ease-in,background 85ms ease-in;
    width: 100%;
    color: ${({theme}) => theme.primaryFontColor};
    box-sizing: border-box;
    -webkit-appearance: none;
    border-radius: 3px;
    line-height: 20px;
    padding: 8px 12px;
`
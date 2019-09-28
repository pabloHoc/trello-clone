import { css } from 'styled-components/macro'

export const closeButton = css`
    color: ${({theme}) => theme.primaryFontColor};
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 99;
` 

export const boxShadow = css`
    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2);
`
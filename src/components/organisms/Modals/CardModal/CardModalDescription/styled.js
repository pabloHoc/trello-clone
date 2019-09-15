import styled from 'styled-components/macro'

export const DescriptionBox = styled.div`
    background-color: rgba(9,30,66,.04);
    box-shadow: none;
    border: none;
    border-radius: 3px;
    display: block;
    min-height: 40px;
    padding: 8px 12px;
    text-decoration: none;
    color: ${({theme}) => theme.primaryFontColor};
    cursor: pointer;
    
    :hover {
        background-color: rgba(9,30,66,.08);
        box-shadow: none;
        border: none;
    }
`
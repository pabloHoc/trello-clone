import styled from 'styled-components/macro'

export const Wrapper = styled.div`
    color: ${({theme}) => theme.primaryFontColor};
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 99;
`
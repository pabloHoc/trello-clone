import styled from 'styled-components/macro'

export const Wrapper = styled.div`
    position: fixed;
    width: 320px;
    height: calc(100vh - 40px);
    top: 40px;
    right: 0;
    background-color: #f4f5f7;
`

export const Title = styled.p`
    color: ${({theme}) => theme.primaryFontColor};
    text-align: center;
    font-weight: bold;
    margin: 20px 10px 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${({theme}) => theme.divisorLineColor};
`

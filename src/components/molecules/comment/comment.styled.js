import styled from 'styled-components/macro'

const Wrapper = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.divisorLineColor};
    margin-bottom: 15px;
    padding-bottom: 15px;
`

const Username = styled.p`
    font-weight: bold;
    color: ${({theme}) => theme.primaryFontColor};
    margin-bottom: 15px;
    padding-bottom: 15px;
`

const Text = styled.div`
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 2px -1px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    box-sizing: border-box;
    clear: both;
    display: inline-block;
    margin: 4px 2px 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 8px 12px;
    margin: 5px 0;
`

const Actions = styled.div`
    display: flex;
`

const Action = styled.a`
    color: ${({theme}) => theme.primaryFontColor};
    font-size: 12px;
    margin: 0 5px;
`

export const Comment = {
    Wrapper,
    Username,
    Text,
    Actions,
    Action
}
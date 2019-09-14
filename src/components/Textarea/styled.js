import styled from 'styled-components'

export const Textarea = styled.textarea`
    width: 100%;
    color: ${({theme}) => theme.primaryFontColor};
    box-sizing: border-box;
    -webkit-appearance: none;
    border-radius: 3px;
    display: block;
    line-height: 20px;
    margin-bottom: 12px;
    border: none;
    box-shadow: none;
    height: auto;
    margin-bottom: 4px;
    overflow-y: auto;
    padding: 5px 10px;
    overflow-wrap: break-word;
    resize: none;
    height: 54px;
    font-family: inherit;
`
import styled from 'styled-components/macro'
import UTextInput from 'components/atoms/textinput/textinput'
import UTextarea from 'components/atoms/textarea/textarea'

export const TextInput = styled(UTextInput)`
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

export const Textarea = styled(UTextarea)`
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

export const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const IconWrapper = styled.div`
    font-size: 20px;
    transform: translateY(2px);
    cursor: pointer;
    margin-left: 10px;
`

export const Wrapper = styled.div``
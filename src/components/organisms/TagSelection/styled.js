import styled from 'styled-components/macro'
import ButtonUnstyled from 'components/atoms/Button/Button'
import TextInputUnstyled from 'components/atoms/TextInput/TextInput'

export const Wrapper = styled.div`
    padding: 0 15px;
`

export const TextInput = styled(TextInputUnstyled)`
    margin-bottom: 15px;
`

export const Button = styled(ButtonUnstyled)`
    text-align: center;
    margin: 15px 0;
    padding: 5px 10px;
    display: block;
`
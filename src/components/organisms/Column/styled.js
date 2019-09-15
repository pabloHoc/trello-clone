import styled from 'styled-components/macro'
import UnstyledToggeableInput from 'components/molecules/AddInputWithToggle/AddInputWithToggle'
import UnstyledCardList from 'components/molecules/Card/CardList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.div`
    min-width: 250px;
    border-radius: 5px;
    background-color: #dfe1e6;
    margin: 0 5px;
`

export const Title = styled.p`
    padding: 5px 8px;
    color: $primary-font-color;
    font-weight: bold;
    padding: 6px 10px;
`

export const CardList = styled(UnstyledCardList)`
    padding: 5px 8px;
`

export const ToggeableInput = styled(UnstyledToggeableInput)`
    padding: 5px 8px;
`

export const AddCardToggle = styled.div`
    border-radius: 0 0 3px 3px;
    color: #6b778c;
    display: flex;
    padding: 8px;
    position: relative;
    text-decoration: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;

    :hover {
        background-color: rgba(9,30,66,.13);
        color: #172b4d;
        text-decoration: underline;
    }
`

export const Icon = styled(FontAwesomeIcon)`
    margin-right: 5px;
`

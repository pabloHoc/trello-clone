import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const titleSize = {
    big: '22px',
    medium: '14px'
}

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;
`
export const Icon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.primaryFontColor};
    margin-right: 15px;
`

export const Title = styled.p(({theme, size}) => ({
    color: theme.primaryFontColor,
    fontWeight: 'bold',
    fontSize: titleSize[size]
}))
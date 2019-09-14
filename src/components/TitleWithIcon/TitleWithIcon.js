import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled'

export const TITLE_SIZE = {
    BIG: 'big',
    MEDIUM: 'medium'
}

const TitleWithIcon = ({title, icon, size}) => (
    <Styled.TitleWrapper>
        <Styled.IconWrapper>
            <FontAwesomeIcon icon={icon} />
        </Styled.IconWrapper>
        <Styled.Title size={size}>{title}</Styled.Title>
    </Styled.TitleWrapper>
)

export default TitleWithIcon
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Wrapper, Icon, Title} from './styled'

export const TITLE_SIZE = {
    BIG: 'big',
    MEDIUM: 'medium'
}

const TitleWithIcon = ({title, icon, size}) => (
    <Wrapper>
        <Icon icon={icon} />
        <Title size={size}>{title}</Title>
    </Wrapper>
)

export default TitleWithIcon
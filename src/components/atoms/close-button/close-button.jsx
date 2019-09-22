import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as S from './close-button.styled'

const CloseButton = ({onClose}) => (
    <S.Wrapper>
        <FontAwesomeIcon 
            icon={faTimes} 
            onClick={onClose} 
        />
    </S.Wrapper>
)

export default CloseButton;

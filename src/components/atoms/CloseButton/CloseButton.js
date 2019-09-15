import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './styled'

const CloseButton = ({onClose}) => (
    <Styled.ButtonWrapper>
        <FontAwesomeIcon 
            icon={faTimes} 
            onClick={onClose} 
        />
    </Styled.ButtonWrapper>
)

export default CloseButton;

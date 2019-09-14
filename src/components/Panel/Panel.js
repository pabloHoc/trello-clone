import React from 'react'
import CloseButton from 'components/CloseButton/CloseButton'
import TagSelection from 'components/TagSelection/TagSelection'
import { PanelContextConsumer } from 'components/Contexts/PanelContext'
import * as Styled from './styled'

const Panel = () => (
    <PanelContextConsumer>
        {
            ({panelVisible, closePanel}) => (
                panelVisible &&
                <Styled.PanelWrapper>
                    <CloseButton onClose={closePanel} />
                    <Styled.Title>Etiquetas</Styled.Title>
                    <TagSelection />
                </Styled.PanelWrapper>
            )
        }
    </PanelContextConsumer>
)

export default Panel
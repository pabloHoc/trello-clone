import React from 'react'
import CloseButton from 'components/atoms/CloseButton/CloseButton'
import TagSelection from 'components/organisms/TagSelection/TagSelection'
import { PanelContextConsumer } from 'components/Contexts/PanelContext'
import { Wrapper, Title } from './styled'

const Panel = () => (
    <PanelContextConsumer>
        {
            ({panelVisible, closePanel}) => (
                panelVisible &&
                <Wrapper>
                    <CloseButton onClose={closePanel} />
                    <Title>Etiquetas</Title>
                    <TagSelection />
                </Wrapper>
            )
        }
    </PanelContextConsumer>
)

export default Panel
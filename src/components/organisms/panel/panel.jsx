import React from 'react'
import CloseButton from 'components/atoms/close-button/close-button'
import TagSelection from 'components/organisms/tag-selection/tag-selection'
import { PanelContextConsumer } from 'components/Contexts/PanelContext'
import * as S from './panel.styled'

const Panel = () => (
    <PanelContextConsumer>
        {
            ({panelVisible, closePanel}) => (
                panelVisible &&
                <S.Wrapper>
                    <CloseButton onClose={closePanel} />
                    <S.Title>Etiquetas</S.Title>
                    <TagSelection />
                </S.Wrapper>
            )
        }
    </PanelContextConsumer>
)

export default Panel
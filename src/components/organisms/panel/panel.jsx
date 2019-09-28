import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { PanelContextConsumer } from 'components/Contexts/PanelContext'
import TagSelection from 'components/organisms/tag-selection/tag-selection'
import * as S from './panel.styled'

const Panel = () => (
    <PanelContextConsumer>
        {
            ({panelVisible, closePanel}) => (
                panelVisible &&
                <S.Wrapper>
                    <S.CloseButton icon={faTimes} onClick={closePanel} />
                    <S.Title>Etiquetas</S.Title>
                    <TagSelection />
                </S.Wrapper>
            )
        }
    </PanelContextConsumer>
)

export default Panel
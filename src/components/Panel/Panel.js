import React from 'react'
import './Panel.scss'
import CloseButton from 'components/CloseButton/CloseButton'
import TagSelection from 'components/TagSelection/TagSelection'
import { PanelContextConsumer } from 'components/Contexts/PanelContext'

const Panel = () => (
    <PanelContextConsumer>
        {
            ({panelVisible, closePanel}) => (
                panelVisible &&
                <div className='panel'>
                    <CloseButton onClose={closePanel} />
                    <p className='title'>Etiquetas</p>
                    <TagSelection />
                </div>
            )
        }
    </PanelContextConsumer>
)

export default Panel
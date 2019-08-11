import React from 'react'
import Panel from 'components/Panel/Panel'
import Button, { BUTTON_SIZES, BUTTON_TYPES } from 'components/Button/Button';
import {faBars} from '@fortawesome/free-solid-svg-icons'

class MenuButton extends React.Component {
    state = {
        panelVisible: false
    }
    openPanel = () => {
        this.setState({ panelVisible: true})
    }
    closePanel = () => {
        this.setState({ panelVisible: false})
    }
    render() {
        return(
            <>
                <Button 
                    type={BUTTON_TYPES.LIGHT} 
                    size={BUTTON_SIZES.ICON} 
                    icon={faBars}
                    onClick={this.openPanel} 
                />
                {
                    this.state.panelVisible &&
                    <Panel onClose={this.closePanel} />
                }
            </>
        )
    }
}

export default MenuButton
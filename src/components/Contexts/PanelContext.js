import React from 'react'

const PanelContext = React.createContext()

class PanelContextProvider extends React.Component {
    state = {
        panelVisible: false
    }
    openPanel = () => {
        this.setState({ panelVisible: true})
    }
    closePanel = () => {
        this.setState({ panelVisible: false})
    }
    render(){
        return (
            <PanelContext.Provider
                value={{
                    panelVisible: this.state.panelVisible,
                    openPanel: this.openPanel,
                    closePanel: this.closePanel
                }}
            >
                {this.props.children}
            </PanelContext.Provider>
        )
    }
}

export const PanelContextConsumer = PanelContext.Consumer
export default PanelContextProvider
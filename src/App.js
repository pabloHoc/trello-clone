import React from 'react';
import Dashboard from 'components/Dashboard/Dashboard'
import Navbar from 'components/Navbar/Navbar'
import PanelContextProvider from 'components/Contexts/PanelContext'
import Panel from 'components/Panel/Panel'

const App = () => ( 
    <PanelContextProvider>
      <Navbar />
      <Dashboard title='Mi tablero' />
      <Panel />
    </PanelContextProvider>
)

export default App

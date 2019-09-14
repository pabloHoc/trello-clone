import React from 'react'
import { ThemeProvider } from 'styled-components'
import Dashboard from 'components/Dashboard/Dashboard'
import Navbar from 'components/Navbar/Navbar'
import PanelContextProvider from 'components/Contexts/PanelContext'
import Panel from 'components/Panel/Panel'
import { theme } from 'styles/theme'

const DashboardView = () => (
    <ThemeProvider theme={theme}>
      <PanelContextProvider>
        <Navbar />
        <Dashboard title='Mi tablero' />
        <Panel />
      </PanelContextProvider>
    </ThemeProvider>
)

export default DashboardView

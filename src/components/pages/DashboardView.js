import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import Dashboard from 'components/organisms/Dashboard/Dashboard'
import Navbar from 'components/organisms/Navbar/Navbar'
import PanelContextProvider from 'components/Contexts/PanelContext'
import Panel from 'components/organisms/Panel/Panel'
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

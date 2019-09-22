import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import Dashboard from 'components/organisms/dashboard/dashboard'
import Navbar from 'components/organisms/navbar/navbar'
import PanelContextProvider from 'components/Contexts/PanelContext'
import Panel from 'components/organisms/panel/panel'
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

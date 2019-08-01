import React from 'react';
import Dashboard from 'components/Dashboard/Dashboard'
import Panel from 'components/Panel/Panel'
import Navbar from 'components/Navbar/Navbar'
import Modal from 'components/Modal/Modal'

const App = () => (
  <>
    <Navbar />
    <Dashboard title='Mi tablero' />
    <Panel />
    <Modal />
  </>    
)

export default App

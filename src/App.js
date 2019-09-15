import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from 'components/pages/Home'
import DashboardView from 'components/pages/DashboardView'

const App = () => (
    <DashboardView />
  // <Router>
  //     <Route path='/home' component={Home} />
  //     <Route path='/dashboard' component={DashboardView} />
  // </Router> 
)

export default App

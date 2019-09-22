import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from 'components/pages/home'
import DashboardView from 'components/pages/dashboard'

const App = () => (
    <DashboardView />
  // <Router>
  //     <Route path='/home' component={Home} />
  //     <Route path='/dashboard' component={DashboardView} />
  // </Router> 
)

export default App

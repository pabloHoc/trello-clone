import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from 'views/Home'
import DashboardView from 'views/DashboardView'

const App = () => (
    <DashboardView />
  // <Router>
  //     <Route path='/home' component={Home} />
  //     <Route path='/dashboard' component={DashboardView} />
  // </Router> 
)

export default App

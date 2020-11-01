import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Theme from './Theme'

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Theme>
  )
}

export default App

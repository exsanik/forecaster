import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Header from '../Header/Header'
import { WeatherPage, ForecastPage } from '../pages'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={WeatherPage} exact />
        <Route path="/forecast:id" component={ForecastPage} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App

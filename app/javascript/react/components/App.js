import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import StationsIndexContainer from "./StationsIndexContainer"
import StationShowContainer from "./StationShowContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StationsIndexContainer}/>
        <Route exact path ="/stations/:id" component={StationShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

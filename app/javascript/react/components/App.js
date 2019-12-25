import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import StationsIndexContainer from "./StationsIndexContainer"
import StationShowContainer from "./StationShowContainer"
import UserShowContainer from "./UserShowContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StationsIndexContainer}/>
        <Route exact path="/stations" component={StationsIndexContainer}/>
        <Route exact path ="/stations/:id" component={StationShowContainer}/>
        <Route exact path ="/users/:id" component={UserShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

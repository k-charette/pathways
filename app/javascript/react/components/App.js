import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import StationsIndexContainer from "./StationsIndexContainer"
import StationFormContainer from "./StationFormContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StationsIndexContainer}/>
        <Route exact path ="/stations/:id" component={StationFormContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

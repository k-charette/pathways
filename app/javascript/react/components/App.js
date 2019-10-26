import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import StationsIndexContainer from "./StationsIndexContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StationsIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

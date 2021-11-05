import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css"

import HuntersValley from "./views/HuntersValley"
import MarketPlace from "./views/MarketPlace"
import TrainingGround from "./views/TrainingGround"
import MyDearMonsters from "./views/MyDearMonsters"
import MyItems from "./views/MyItems"
import More from "./views/More"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HuntersValley />
        </Route>
        <Route path="/market_place">
          <MarketPlace />
        </Route>
        <Route path="/training_ground">
          <TrainingGround />
        </Route>
        <Route path="/my_dear_monsters">
          <MyDearMonsters />
        </Route>
        <Route path="/my_items">
          <MyItems />
        </Route>
        <Route path="/more">
          <More />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

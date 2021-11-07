import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Landing from "./views/Landing";
import HuntersValley from "./views/HuntersValley";
import MarketPlace from "./views/MarketPlace";
import TrainingGround from "./views/TrainingGround";
import MyDearMonsters from "./views/MyDearMonsters";
import MyItems from "./views/MyItems";
import More from "./views/More";

const LoadingDiv = () => <div className="bg-blue w-full h-screen"></div>;

function App() {
  return (
    <React.Suspense fallback={<LoadingDiv />}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/hunters_valley">
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
    </React.Suspense>
  );
}

export default App;

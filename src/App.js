import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';

import BestOfTheYear from './pages/BestOfTheYear/BestOfTheYear';
import Popular2019 from './pages/Popular2019/Popular2019';
import AllTimePopular from './pages/AllTimePopular/AllTimePopular';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Navbar />

      <SideMenu pageWrapId={"sidebar"} />
      <div id="sidebar">

        <Switch>
          <Route exact path="/" component={BestOfTheYear} />
          <Route exact path="/popular-in-2019" component={Popular2019} />
          <Route exact path="/all-time-popular" component={AllTimePopular} />


        </Switch>

      </div>

    </>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';

//pages
import BestOfTheYear from './pages/BestOfTheYear/BestOfTheYear';
import Popular2019 from './pages/Popular2019/Popular2019';
import AllTimePopular from './pages/AllTimePopular/AllTimePopular';
import Last30Days from './pages/Last30Days/Last30Days';
import ThisWeek from './pages/ThisWeek/ThisWeek';
import MextWeek from './pages/NextWeek/NextWeek';
import Details from './pages/Details/Details';

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
          <Route exact path="/last-30-days" component={Last30Days} />
          <Route exact path="/this-week" component={ThisWeek} />
          <Route exact path="/next-week" component={MextWeek} />
          <Route exact path="/details/:id" component={Details} />


        </Switch>

      </div>

    </>
  );
}

export default App;

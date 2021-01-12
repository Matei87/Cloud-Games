import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


//PAGES
//details
import Details from './pages/Details/Details';
//search
import Search from './pages/Search/Search';

//top
import BestOfTheYear from './pages/BestOfTheYear/BestOfTheYear';
import Popular2020 from './pages/Popular2020/Popular2020';
import Popular2019 from './pages/Popular2019/Popular2019';
import AllTimePopular from './pages/AllTimePopular/AllTimePopular';

//new releases
import Last30Days from './pages/Last30Days/Last30Days';
import ThisWeek from './pages/ThisWeek/ThisWeek';
import NextWeek from './pages/NextWeek/NextWeek';

//platforms
import PlatformPc from './pages/PC/PC';
import PlatformPlaystation4 from './pages/Playstation4/Playstation4';
import PlatformXboxOne from './pages/XboxOne/XboxOne';
import PlatformNintendoSwitch from './pages/NintendoSwitch/NintendoSwitch';
import PlatformIos from './pages/iOS/iOS';
import PlatformAndroid from './pages/Android/Android';


import 'bootstrap/dist/css/bootstrap.min.css';
//import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  return (
    <ScrollToTop>
      <Navbar />

      <SideMenu pageWrapId={"sidebar"} />
      <div id="sidebar">

        <Switch>
          <Route exact path="/" component={BestOfTheYear} />
          <Route exact path="/popular-in-2020" component={Popular2020} />
          <Route exact path="/popular-in-2019" component={Popular2019} />
          <Route exact path="/all-time-popular" component={AllTimePopular} />
          <Route exact path="/last-30-days" component={Last30Days} />
          <Route exact path="/this-week" component={ThisWeek} />
          <Route exact path="/next-week" component={NextWeek} />

          <Route exact path="/pc" component={PlatformPc} />
          <Route exact path="/playstation4" component={PlatformPlaystation4} />
          <Route exact path="/xbox-one" component={PlatformXboxOne} />
          <Route exact path="/nintendo-switch" component={PlatformNintendoSwitch} />
          <Route exact path="/ios" component={PlatformIos} />
          <Route exact path="/android" component={PlatformAndroid} />

          <Route exact path="/search" component={Search} />
          <Route exact path="/details/:id" component={Details} />


        </Switch>

      </div>

    </ScrollToTop>
  );
}

export default App;

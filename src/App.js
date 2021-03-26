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

//browse
import Platforms from './pages/Platforms/Platforms';
import Stores from './pages/Stores/Stores';
import Genres from './pages/Genres/Genres';

//platforms
import PlatformPc from './pages/Platforms/PC/PC';
import PlatformPlaystation from './pages/Platforms/Playstation/Playstation';
import PlatformPlaystation2 from './pages/Platforms/Playstation2/Playstation2';
import PlatformPlaystation3 from './pages/Platforms/Playstation3/Playstation3';
import PlatformPlaystation4 from './pages/Platforms/Playstation4/Playstation4';
import PlatformPlaystation5 from './pages/Platforms/Playstation5/Playstation5';
import PlatformXboxOne from './pages/Platforms/XboxOne/XboxOne';
import PlatformXboxSeriesSX from './pages/Platforms/XboxSeriesSX/XboxSeriesSX';
import PlatformXbox360 from './pages/Platforms/Xbox360/Xbox360';
import PlatformXboxOld from './pages/Platforms/XboxOld/XboxOld';
import PlatformNintendoSwitch from './pages/Platforms/NintendoSwitch/NintendoSwitch';
import PlatformNintendoDS from './pages/Platforms/NintendoDS/NintendoDS';
import PlatformNintendoDSI from './pages/Platforms/NintendoDSI/NintendoDSI';
import PlatformNintendo3DS from './pages/Platforms/Nintendo3DS/Nintendo3DS';
import PlatformIos from './pages/Platforms/iOS/iOS';
import PlatformAndroid from './pages/Platforms/Android/Android';
import PlatformMacOS from './pages/Platforms/MacOS/MacOS';
import PlatformLinux from './pages/Platforms/Linux/Linux';
import PlatformPSVita from './pages/Platforms/PSVita/PSVita';
import PlatformPSP from './pages/Platforms/PSP/PSP';
import PlatformWiiU from './pages/Platforms/WiiU/WiiU';
import PlatformWii from './pages/Platforms/Wii/Wii';


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

          <Route exact path="/platforms" component={Platforms} />
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/genres" component={Genres} />

          <Route exact path="/games/pc" component={PlatformPc} />
          <Route exact path="/games/playstation1" component={PlatformPlaystation} />
          <Route exact path="/games/playstation2" component={PlatformPlaystation2} />
          <Route exact path="/games/playstation3" component={PlatformPlaystation3} />
          <Route exact path="/games/playstation4" component={PlatformPlaystation4} />
          <Route exact path="/games/playstation5" component={PlatformPlaystation5} />
          <Route exact path="/games/xbox-one" component={PlatformXboxOne} />
          <Route exact path="/games/xbox-series-x" component={PlatformXboxSeriesSX} />
          <Route exact path="/games/xbox360" component={PlatformXbox360} />
          <Route exact path="/games/xbox-old" component={PlatformXboxOld} />
          <Route exact path="/games/nintendo-switch" component={PlatformNintendoSwitch} />
          <Route exact path="/games/nintendo-ds" component={PlatformNintendoDS} />
          <Route exact path="/games/nintendo-dsi" component={PlatformNintendoDSI} />
          <Route exact path="/games/nintendo-3ds" component={PlatformNintendo3DS} />
          <Route exact path="/games/ios" component={PlatformIos} />
          <Route exact path="/games/android" component={PlatformAndroid} />
          <Route exact path="/games/macos" component={PlatformMacOS} />
          <Route exact path="/games/linux" component={PlatformLinux} />
          <Route exact path="/games/ps-vita" component={PlatformPSVita} />
          <Route exact path="/games/psp" component={PlatformPSP} />
          <Route exact path="/games/wii-u" component={PlatformWiiU} />
          <Route exact path="/games/wii" component={PlatformWii} />

          <Route exact path="/search" component={Search} />
          <Route exact path="/details/:id" component={Details} />


        </Switch>

      </div>

    </ScrollToTop>
  );
}

export default App;

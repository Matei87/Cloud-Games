import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <SideMenu />

      <Switch>

      </Switch>

    </>
  );
}

export default App;

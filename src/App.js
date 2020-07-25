import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import { Switch, Route } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />

      </Switch>
    </div>
  );
}

export default App;

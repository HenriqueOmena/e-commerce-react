import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/contact.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header.component";
import SingInAndSignUpPAge from "./pages/sing-in-and-sign-up/sing-in-and-sign-up.component";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component= {HomePage}/>
        <Route path='/shop' component= {ShopPage}/>
        <Route path='/signin' component= {SingInAndSignUpPAge}/>
        <Route path='/contact' component= {ContactPage}/>
      </Switch>
    </div>
  );
}

export default App;

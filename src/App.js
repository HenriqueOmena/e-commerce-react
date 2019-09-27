import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/contact.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header.component";
import SingInAndSignUpPAge from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import{ auth } from './firebase/firebase.utils'


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user})

            console.log(user)
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
      return (
          <div>
            <Header currentUser={this.state.currentUser}/>
            <Switch>
              <Route exact path='/' component= {HomePage}/>
              <Route path='/shop' component= {ShopPage}/>
              <Route path='/signin' component= {SingInAndSignUpPAge}/>
              <Route path='/contact' component= {ContactPage}/>
            </Switch>
          </div>
        );
    }
}

export default App;

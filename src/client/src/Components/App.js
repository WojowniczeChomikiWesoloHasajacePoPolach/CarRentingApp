import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // zainstalowana biblioteka do wybierania sciezek
import RegisterCustomer from './RegisterCustomer';
import MainPage from './MainPage';
import './App.css';
import CarOrder from './CarOrder';

import AdminLoginPage from './AdminLoginPage';
import AdminProfile from './AdminProfile';
import AdminHomePage from './AdminHomePage';
import CarUpdate from './CarUpdate';

const App = () => {

    return (
    <Router>
        <Switch>
            <Route path="/register" exact component={RegisterCustomer} />
            <Route path="/" exact component={MainPage} />
            <Route path="/admin" exact component={AdminLoginPage} />
            <Route path="/admin/me" exact component={AdminProfile} />
            <Route path="/admin/home" exact component={AdminHomePage} />
            <Route path="/admin/cars/:_id" exact component={AdminHomePage} />
            <Route path="/order" exact component={CarOrder} />
        </Switch>
      </Router>
    );
    
};

export default App;
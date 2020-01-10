import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // zainstalowana biblioteka do wybierania sciezek
import MainPage from './MainPage';
import './App.css';
import CarOrder from './CarOrder';
import AdminLoginPage from './AdminLoginPage';
import AdminProfile from './AdminProfile';
import AdminHomePage from './AdminHomePage';
import CarUpdate from './CarUpdate';
import UserUpdate from './AddUser';
import CustomerRegisterPage from './CustomerRegisterPage';
import CustomerLoginPage from './CustomerLoginPage';

const App = () => {

    return (
    <Router>
        <Switch>
            <Route path="/login" exact component={CustomerLoginPage} />
            <Route path="/" exact component={MainPage} />
            <Route path="/admin" exact component={AdminLoginPage} />
            <Route path="/admin/my-account" exact component={AdminProfile} />
            <Route path="/admin/home" exact component={AdminHomePage} />
            <Route path="/admin/cars/:_id" exact component={CarUpdate} />
            <Route path="/admin/cars/new" exact component={CarUpdate} />
            <Route path="/admin/users/:_id" exact component={UserUpdate} />
            <Route path="/order" exact component={CarOrder} />
            <Route path="/signup" exact component={CustomerRegisterPage} />
        </Switch>
      </Router>
    );
    
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // zainstalowana biblioteka do wybierania sciezek
import RegisterCustomer from './RegisterCustomer';

const App = () => {

    return (
    <Router>
        <Switch>
            <Route path="/register" exact component={RegisterCustomer} />
    </Switch>
    </Router>
        );
    
};

export default App;

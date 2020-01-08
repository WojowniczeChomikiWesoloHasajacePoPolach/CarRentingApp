import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
    <Provider store={createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))}>
        <App />
    </Provider>
    </BrowserRouter>,
        document.querySelector('#root')
);
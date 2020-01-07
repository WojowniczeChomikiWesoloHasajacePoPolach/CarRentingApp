import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import carReducer from './carReducer';
import fetchUsers from './fetchUsers'

export default combineReducers({
    admin: adminReducer,
    car: carReducer,
    user: fetchUsers
});
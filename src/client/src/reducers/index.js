import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import carReducer from './carReducer';
import fetchUsers from './fetchUsers';
import fetchCar from './fetchCar';
import fetchUser from './fetchUser';


export default combineReducers({
    admin: adminReducer,
    cars: carReducer,
    users: fetchUsers,
    user: fetchUser,
    car: fetchCar
});
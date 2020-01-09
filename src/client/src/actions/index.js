import apis from '../apis/index';

export const adminLogin = (login, password) => async dispatch => {
    let response = await apis.post('admin/user/login', {login, password});
    alert(response.data.message);
    localStorage.setItem('id', response.data.id);
    dispatch({type: 'LOGIN', payload: response.data });
};
export const adminLogOut = () => async dispatch => {
    localStorage.removeItem('id');
    dispatch({type: 'LOG_OUT'})
}

export const getUsers = () => async dispatch => {
    let response = await apis.get('admin/user');
    dispatch({type: 'GET_USERS', payload: response.data});
}

export const getUser = id => async dispatch => {
    let response = await apis.get('admin/user/'+id);
    dispatch({type: 'GET_USER', payload: response.data});
};
export const updateUser = (_id, login, name, email, currentPassword, newPassword) => async dispatch => {
    let response = await apis.put('admin/user/'+ _id, {login, name, email, currentPassword, newPassword});
    alert(response.data.message);
    dispatch({type: 'UPDATE_USER', payload: response.data});
};
export const addUser = (login, name, email, password, confirmPassword) => async dispatch => {
    let response = await apis.post('admin/user/register', {login, name, email, password, confirmPassword});
    alert(response.data.message);
    dispatch({type: 'ADD_USER', payload: response.data});
};
export const deleteUser = id => async dispatch => {
    let response = await apis.delete('admin/user/'+ id);
    alert(response.data.message);
    dispatch({type: 'DELETE_USER', payload: response.data});
};

export const getCars = () => async dispatch => {
    let response = await apis.get('admin/cars/');
    console.log(response)
    dispatch({type: 'GET_CARS', payload: response.data});
};

export const getCar = id => async dispatch => {
    let response = await apis.get('admin/cars/'+ id);
    dispatch({type: 'GET_CAR', payload: response.data});
};

export const addCar = (_id, brand, model, motor, mileage, power, registryNumber, dailyRentalRate) => async dispatch => {
    let response = await apis.post('admin/cars/', {brand, model, motor, mileage, power, registryNumber, dailyRentalRate});
    alert(response.data.message);
    dispatch({type: 'ADD_CAR', payload: response.data});
};

export const updateCar = (_id, brand, model, motor, mileage, power, registryNumber, dailyRentalRate) => async dispatch => {
    let response = await apis.put('admin/cars/'+ _id, {brand, model, motor, mileage, power, registryNumber, dailyRentalRate});
    alert(response.data.message);
    dispatch({type: 'UPDATE_CAR', payload: response.data});
};

export const deleteCar = id => async dispatch => {
    let response = await apis.delete('admin/cars/'+ id);
    alert(response.data.message);
    dispatch({type: 'DELETE_CAR', payload: response.data});
};
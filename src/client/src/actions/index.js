import apis from '../apis/index';

export const adminLogin = (login, password) => async dispatch => {
    let response = await apis.post('admin/user/login', {login, password});
    console.log(response);
    alert(response.data);
    localStorage.setItem('id', response.data.id);
    dispatch({type: 'LOGIN', payload: response.data });
};
export const adminLogOut = () => async dispatch => {
    localStorage.removeItem('id');
    dispatch({type: 'LOG_OUT'})
}

export const getUsers = () => async dispatch => {
    let response = await apis.get('admin/user');
    console.log(response);
    dispatch({type: 'GET_USERS', payload: response.data});
}

export const adminProfile = id => async dispatch => {
    let response = await apis.get('admin/user/'+id);
    console.log(response);

    dispatch({type: 'SHOW', payload: response.data});
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

export const addCar = () => async dispatch => {
    let response = await apis.post('admin/cars/');
    dispatch({type: 'ADD_CARS', payload: response.data});
};

export const updateCar = id => async dispatch => {
    let response = await apis.put('admin/cars/'+ id);
    dispatch({type: 'UPDATE_CARS', payload: response.data});
};

export const deleteCar = id => async dispatch => {
    let response = await apis.delete('admin/cars/'+ id);
    dispatch({type: 'DELETE_CARS', payload: response.data});
};
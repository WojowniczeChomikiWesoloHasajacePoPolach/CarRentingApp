const axios = require('axios');

const rentingapp = axios.create({
    baseURL:'http://localhost:3000'
})

export const customerRegister = payload => rentingapp.post(`/customer/register`, payload);

const apis = {
    customerRegister
};

export default apis;


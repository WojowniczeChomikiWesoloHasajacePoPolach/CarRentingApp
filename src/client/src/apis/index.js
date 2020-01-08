const axios = require('axios');

export default axios.create({
    baseURL:'http://localhost:3000'
});

// export const customerRegister = payload => rentingapp.post(`/customer/register`, payload);
// export const adminLogin = payload => rentingapp.post(`/admin/user/login`, payload);


// const apis = {
//     customerRegister,
//     adminLogin
// };

// export default apis;


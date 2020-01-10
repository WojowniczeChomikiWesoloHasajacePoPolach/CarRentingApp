export default (
    state = {_id: '', login: '', name: '', email: ''},
    action) => {
        switch (action.type) {
            case 'GET_CUSTOMER':
                return action.payload;
            case 'CUSTOMER_REGISTER':
                return action.payload;
            case 'CUSTOMER_LOGIN':
                return action.payload;
            case 'CUSTOMER_LOGOUT':
                return action.payload;
                default: 
                return state;
        }
    };
export default (
    state = [],
    action) => {
        switch (action.type) {
            case 'GET_CUSTOMERS':
                return action.payload;
            case 'UPDATE_CUSTOMER':
                return state;
            case 'DELETE_CUSTOMER':
                return state;
                default: 
                return state;
        }
    };
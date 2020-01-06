export default (
    state = {login: '', name: '', email: '', isAdmin: ''},
    action) => {
        switch (action.type) {
            case 'LOGIN':
                return action.payload;
            case 'SHOW':
                return action.payload;
            case 'LOG_OUT':
                return {login: '', name: '', email: '', isAdmin: ''};
            default: 
                return state;
        }
    };
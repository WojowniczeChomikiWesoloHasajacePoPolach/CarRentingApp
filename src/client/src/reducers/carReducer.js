export default (
    state = [],
    action) => {
        switch (action.type) {
            case 'GET_CARS':
                return action.payload;
            case 'GET_CAR':
                return state;
                case 'ADD_CAR':
                return action.payload;
                case 'UPDATE_CAR':
                return state;
                case 'DELETE_CAR':
                return state;
                default: 
                return state;
        }
    };
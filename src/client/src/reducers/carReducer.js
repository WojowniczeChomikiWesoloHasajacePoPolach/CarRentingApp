export default (
    state = [],
    action) => {
        switch (action.type) {
            case 'GET_CARS':
                return action.payload;
            case 'GET_CAR':
                return action.payload;
                case 'ADD_CAR':
                return action.payload;
                case 'UPDATE_CARS':
                return action.payload;
                case 'DELETE_CARS':
                return action.payload;
                default: 
                return state;
        }
    };
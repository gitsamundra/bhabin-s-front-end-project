export const postReducer =  (state = [], action) => {
    switch(action.type) {
        case 'CREATE_POST':
            return [...state, action.payload];
        case 'FETCH_ALL_POST':
            return action.payload;
        case 'FETCH_POST':
            return state;
        case 'EDIT_POST':
            return state.map(post => post._id === action.payload._id ? action.payload : post);
        case 'DELETE_POST':
            return state.filter(post => post._id !== action.payload);
        default:
            return state;
    }
};
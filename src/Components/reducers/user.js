export const userReducer = (state = { initialData: null}, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            sessionStorage.setItem('profile', JSON.stringify({...action?.payload}));
            return {...state, initialData: action?.payload};
        case 'LOGOUT_USER':
            sessionStorage.clear();
            return {...state, initialData: null};
        default: 
            return state;
    };
};

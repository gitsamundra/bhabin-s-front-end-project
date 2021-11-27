const url = 'https://bhabin.herokuapp.com/api/user/';

export const  userLoggedIn = (data) => async(dispatch) => {
    try {
        const res = await fetch(url + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const message = await res.json();
        return dispatch({type: 'LOGIN_USER', payload: message})
    } catch (error) {
        console.log(error.message);
    }
};
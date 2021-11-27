const url = "https://bhabin.herokuapp.com/api/"

export const fetchPosts = () => async(dispatch) => {
    try {
        const res = await fetch(url+ 'list');
        const data = await res.json();
        return dispatch({ type: 'FETCH_ALL_POST', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const createPost = (post) => async(dispatch) => {
    console.log(post)
    try {
        const res = await fetch(url +'newQuestion', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(post),
        });
        const data = await res.json();
        console.log(data);
        return dispatch({ type: 'CREATE_POST', payload: post });
    } catch (error) {
        console.log(error.message);
    }
};

export const editPost = (id, post) => async(dispatch) => {
    try {
        const res = await fetch(url + 'edit/' + id, {
            method: 'PATCH',
            headers : new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(post)
        });
        const data = await res.json();
        console.log(data);
        return dispatch({ type: 'EDIT_POST', payload: post });
    } catch (error) {
        console.log(error.message);
    }
};

export const deletePost = (id) => async(dispatch) => {
    try {
        const res = await fetch(url + 'delete/' + id, {
            method: 'DELETE',
        });
        const data = await res.json();
        console.log(data);
        return dispatch({ type: 'DELETE_POST', payload: id });
    } catch (error) {
        console.log(error.message);
    }
};
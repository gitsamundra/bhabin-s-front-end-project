import React, { useEffect, useState } from 'react';
import {Button, Paper, TextField, Typography} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, editPost } from '../actions/posts';

const Form = ({currentID, setCurrentID}) => {
    const question = useSelector(state => currentID ? state.posts.find(p => p._id === currentID) : null);
    const dispatch = useDispatch();
    const classes = useStyles()
    const [data, setData] = useState({q: "", a: ''});

    useEffect(() => {
        if(question) setData(question);
    }, [question]);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(currentID) {
            dispatch(editPost(currentID, data));
        } else {
            dispatch(createPost(data));
        };
    };

    const clear = () => {
        setData({
            q:'',
            a:''
        });
    };

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant='h6'> {currentID ? 'Editing' :"Creating"} a Question</Typography>
                <TextField 
                    fullWidth 
                    id="outlined-required" 
                    onChange={handleChange} 
                    name="q" 
                    variant="outlined" 
                    label='Question' 
                    value={data.q}
                />
                <TextField 
                    fullWidth 
                    aria-label="empty textarea"
                    id="outlined-required" 
                    onChange={handleChange} 
                    name="a" 
                    variant="outlined" 
                    label='Answer' 
                    value={data.a}
                />                
                <div>
                    <Button fullWidth color="primary" className={classes.buttonSubmit} size='large' variant="contained"  type='submit' endIcon={<ArrowForwardIosIcon />} >Submit</Button>
                    <Button fullWidth color="secondary" size='small'  variant="contained" onClick={clear} >clear</Button>
                </div>
            </form>
        </Paper>
    )
}

export default Form;

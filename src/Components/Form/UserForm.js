import React, { useState } from 'react';
import {Avatar, Button, Grid, Paper, Typography} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LockOutlined from '@material-ui/icons/LockOpenOutlined'
import useStyles from './userFormStyles';
import { useDispatch} from 'react-redux';
import { userLoggedIn } from '../actions/user';
import Input from './Input';


const UserForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    console.log(formData);
    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(userLoggedIn(formData));
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    };

    return (
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar} >
                <LockOutlined />
            </Avatar>
            <Typography variant='h5'> Login User</Typography>
            <form className={classes.form} onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                    <Input 
                        handleChange={handleChange} 
                        name="email"  
                        label='Email' 
                        type="text"
                        half
                        autoFocus
                    />
                    <Input  
                        handleChange={handleChange} 
                        name="password" 
                        label='Password' 
                        type={showPassword ? 'text' :'password'}
                        handleShowPassword={handleShowPassword}
                        half
                    />                
                </Grid>
                <div>
                    <Button fullWidth color="primary" className={classes.submit} size='large' variant="contained"  type='submit' endIcon={<ArrowForwardIosIcon />} >Submit</Button>
                </div>
            </form>
        </Paper>
    )
}

export default UserForm;

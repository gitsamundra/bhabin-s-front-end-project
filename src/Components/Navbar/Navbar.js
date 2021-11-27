import React from 'react';
import useStyles from './styles';
import ganesh from '../../img/ganesh.jpg'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const Navbar = ({setUser, user}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({type: 'LOGOUT_USER'});
        setUser(null);
    };

    return (
        <AppBar className={classes.appBar} position='static' color='inherit' style={{display: 'flex', justifyContent:'space-between', flexDirection: 'row'}}>
            <div className={classes.brandContainer} >
                <Typography  align='center' variant='h5'>Ganesh</Typography>
                <img src={ganesh} alt="" height="30" className={classes.image}/>
            </div>
            <Toolbar className={classes.toolbar}>
                {JSON.parse(user) ? (
                    <Button variant="contained" className={classes.logout} onClick={logout} color='secondary'>Logout</Button>
                ) : (null)
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

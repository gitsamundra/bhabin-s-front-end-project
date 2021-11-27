import React from 'react';
import Visibility from '@material-ui/icons/Visibility';
import { VisibilityOff } from '@material-ui/icons';
import { TextField, InputAdornment, IconButton, Grid } from '@material-ui/core';

const Input = ({name, type, label, handleShowPassword, autoFocus, handleChange, half }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
                fullWidth 
                required
                onChange={handleChange} 
                name={name}
                variant="outlined" 
                label={label} 
                type={type}
                autoFocus={autoFocus}
                inputProps = {{
                    endadornment : (
                        <InputAdornment position='end'>
                            <IconButton 
                                onClick={handleShowPassword} 
                            >
                                {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />                
        </Grid>
    )
}

export default Input

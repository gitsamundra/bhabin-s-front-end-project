import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style'
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions/posts';

// window.location.reload(false)
const Question = ({question, user, setCurrentID}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant='h6' align='justify'>{question.q}</Typography>
                <br />
                <Typography gutterBottom variant='body2' align='justify'>{question.a}</Typography>
            </CardContent>
            {JSON.parse(user) ? (
                <CardActions className={classes.cardActions}>
                    <Button  variant='contained' size='small' onClick={() => setCurrentID(question._id)} color="primary">edit</Button>
                    <Button variant="contained" size="small" color="secondary" onClick={() => dispatch(deletePost(question._id))}>
                            <DeleteIcon fontSize='small' /> delete
                    </Button>
                </CardActions>
            ) : (null)}
        </Card>
    )
}

export default Question

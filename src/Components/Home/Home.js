import Form from '../../Components/Form/Form';
import Questions from '../../Components/Posts/Questions';
import UserForm from '../../Components/Form/UserForm.js';
import { Container, Grid, Grow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../Components/actions/posts';

const Home = ({user}) => {
    const [currentID, setCurrentID] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <Grow in>
            <Container>
            <Grid container justifyContent='space-between' spacing={3} alignItems='stretch'>
                <Grid item xs={12} sm={7}>
                <Questions user={user} setCurrentID={setCurrentID} />
                </Grid>
                {JSON.parse(user) ?  (
                    <Grid item xs={12} sm={4}>
                        <Form currentID={currentID} setCurrentID={setCurrentID}/>
                    </Grid>
                    ) : (
                    <Grid item xs={12} sm={4}>
                        <UserForm user={user} />
                    </Grid>
                    )
                }
            </Grid>
            </Container>
        </Grow>
    )
};

export default Home;

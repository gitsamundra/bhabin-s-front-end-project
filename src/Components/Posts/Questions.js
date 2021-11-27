import { CircularProgress, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';
import useStyles from './PostsStyle.js'
import ReactPaginate from 'react-paginate';


const Questions = ({user, setCurrentID}) => {
    const classes = useStyles()
    const questionList = useSelector(state => state.posts);
    const [pageNumber, setPageNumber] = useState(1);
    const questionsPerPage = 3;

    const visitedPage = pageNumber * questionsPerPage;
    const currentQuestions = questionList.slice(visitedPage, visitedPage + questionsPerPage);

    const pageCount = Math.ceil(questionList.length / questionsPerPage);
    const handlePageClick = (e) => {
        setPageNumber(e.selected);
    };

    return (
        !currentQuestions.length ? <CircularProgress /> : (
            <Grid alignItems='center'  className={classes.conatier} container spacing={2} >
                {currentQuestions.map((question) =>(
                    <Grid item key={question._id} sx={12} sm={12}>
                        <Question key={question._id} question={question} user={user} setCurrentID={setCurrentID} />
                    </Grid>
                    ) 
                )}
                <ReactPaginate 
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </Grid>

        )
    )
}

export default Questions;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Questions from '../Posts/Questions';

const Page = () => {
    const questionList = useSelector(state => state.posts);
    const [currentPage, setCurrentPage] = useState(1);
    const [questionsPerPage, setquestionsPerPage] = useState(3);

    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questionList.slice(indexOfFirstQuestion,  indexOfLastQuestion)

    
    return (
        <div>
            <h6>Page</h6>
        </div>
    )
};

export default Page;

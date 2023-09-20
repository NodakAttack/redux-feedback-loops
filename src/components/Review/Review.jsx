import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const Review = () => {
    const feelings = useSelector(store => store.feelings);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const history = useHistory();

    const handleSubmit = () => {
        axios
        .get('/feedbackloop')
        .then((response) => {
            history.push('/')
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
            alert('error');
        })
    };

  return (
    <>
    <h1>Review</h1>
    <ul>
        <p>Feelings = {feelings}</p>
        <p>Understanding = {understanding}</p>
        <p>Support = {support}</p>
        <p>Comments = {comments}</p>
        <button onClick={handleSubmit}>Submit</button>
    </ul>
    
    </>
  )
}

export default Review
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMultipleReviews } from '../features/reviews/reviewSlice';

function useReviews(movieId) {

    //const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(null);
    const dispatch =  useDispatch();

    useEffect(() => {
        const url = import.meta.env.VITE_API_BASE_URL
      axios.get(`${url}/reviews?movie=${movieId}`)
            .then(res => {
                const reviewsFromBackend = res.data
               // console.log(reviewsFromBackend)
                dispatch(addMultipleReviews(reviewsFromBackend))
            })
            .catch(error => {
                setError(error)
            })
    }, [])

    return [  error ]
}

export default useReviews
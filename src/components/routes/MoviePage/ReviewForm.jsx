import axios from 'axios';
import React, { useRef } from 'react'
import { addReview } from '../../../features/reviews/reviewSlice';
import { useDispatch } from 'react-redux';


function ReviewForm(props) {

    const dispatch = useDispatch();
    const formRef = useRef(null)
   

   function handleReviewSubmit(e){
        e.preventDefault();
        const form = formRef.current
        const title = form['title'].value
        const description  = form['description']. value

        const review = {
            title : title,
            description : description,
            movie : props.movie
        }
     

      const url = import.meta.env.VITE_API_BASE_URL
     axios.post(`${url}/reviews/add-review`,review)
      .then((res) => {
          console.log(res.data) 
        dispatch(addReview(res.data))
        })
      .catch(error => {
          console.log(error)
      })
     // disptach(addMovie(movie));
        form.reset()
    }
    return (
       
            <form ref={formRef} onSubmit={handleReviewSubmit} className='border-slate-400 flex flex-col gap-4 border mt-16 rounded-lg p-6'>
                <label htmlFor='title'>Title</label>
                <input className='p-2 border border-slate-400 outline-none' type='text' id='title'></input>
                <label htmlFor='description'>Description</label>
                <textarea className='p-2 border border-slate-400 outline-none' type='textarea' id='description'></textarea>
                <button className='bg-orange-400 p-2 rounded-sm'>Add Review</button>
            </form>
     

    )
}

export default ReviewForm
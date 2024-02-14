import React from 'react'
//import getAllReviews from '../../../ApiFunctions/getReviews.jsx';


function Reviews(props) {

    const { title, description } =props.review;

    return (
        <>
            <article className='p-4 border rounded gap-3 flex flex-row '>
                <div>
                    <span className='flex flex-row justify-center items-center text-lg text-white h-12 w-12   rounded-full bg-slate-400'>s</span>
                </div>

                <div>
                    <h3 className='text-md font-bold '>{title}</h3>
                    <p className='mt-3 text-gray-700'>{description}</p>
                </div>

</article>
        </>



    )
}

export default Reviews
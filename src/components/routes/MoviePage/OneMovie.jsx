import React from 'react'
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
import { useSelector } from 'react-redux'
import getOneMovieBySlug from '../../../ApiFunctions/getOneMovie';
import { useLoaderData } from 'react-router-dom';
import useReviews from '../../../hooks/useReviews';
//import getAllReviews from '../../../ApiFunctions/getReviews';

export async function loader({ params }) {
    const { movie } = await getOneMovieBySlug(params.slug);
    return { movie };
}
function Movies(props) {

    const { movie } = useLoaderData();
    const { _id, title, image, description } = movie
    const [error] = useReviews(_id);
    const { reviews } = useSelector(state => state.reviews.reviews)
    //console.log(reviews)




    return (
        <main className='pb-32 '>
            <section className='container mx-auto px-9 py-16'>
                <div className='flex  flex-col md:flex-row gap-3 md:gap-10'>
                    <div>
                        <img className="rounded-xl  mb-8 shadow-xl w-full md:w-screen " src={image}></img>
                    </div>
                    <div> <h1 className='text-2xl font-bold'>{title}</h1>
                        <p className='text-gray-700 mt-3'>{description}</p>
                    </div>
                </div>


            </section>
            <section className='container mx-auto px-9 py-16'>
                <h2 className='text-2xl font-bold'>User Reviews</h2>
                <div className='mt-3 flex flex-col gap-3'>
                    {
                        reviews && reviews.map((review, index) => {
                            return (
                                <Reviews key={index} review={review} />
                            )
                        })
                    }

                </div>
                <ReviewForm movie={_id} />
            </section>
        </main>
    )
}

export default Movies
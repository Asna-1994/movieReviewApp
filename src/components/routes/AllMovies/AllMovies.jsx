import React from 'react'
//import { useSelector } from 'react-redux'
import { Link, useLoaderData } from 'react-router-dom'
import getAllMovies from '../../../ApiFunctions/getMovies';

export async function loader({ params }) {
  const movies = await getAllMovies();
  return movies;
}

function AllMovies(props) {

  // const movies = useSelector(state => state.movies.movies)

  const { movies } = useLoaderData();

  return (
    <section className='container mx-auto px-1  md:px-6 py-12'>
      <div className='flex flex-row justify-between text-2xl font-bold'>
        <h1 className=' '>ALL MOVIES</h1>
        <h1>  <Link to={'/movies/add-movie'} className='border bg-red-600 px-3 py-2 rounded-md'>ADD NEW MOVIE</Link></h1>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5 py-10'>
        {
          movies.map((movie, index) => {
            return (
              <Link key={movie.slug} to={'/movies/' + movie.slug}> <article className='border rounded-lg border-red-300 p-5'>
                <img className='w-56 max-h-72 min-h-72' src={movie.bannerimage}>
                </img>
                <h2 className='font-bold text-xl mt-2'>{movie.title}</h2>
                <span>(3) Reviews</span>
              </article>
              </Link>
            )
          })
        }

      </div>
    </section>
  )
}

export default AllMovies
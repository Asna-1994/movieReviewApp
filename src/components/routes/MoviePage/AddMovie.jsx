import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addMovie } from '../../../features/movies/movieSlice';
import axios from 'axios';
import Movies from './OneMovie';
import { useNavigate } from 'react-router-dom';

function AddMovie() {

    const formRef = useRef(null)
   // const disptach = useDispatch();
    const navigate  =  useNavigate()

    function createUniqueSlug(slug) {

        const random = uuidv4();
        const slugWithuuid = slug + '-' + random
        return slugWithuuid
    }

    function handleAddMovieSubmit(e) {
        e.preventDefault();

        const form = formRef.current
        const title = form['title'].value
        const image = form['image'].value
        const bannerimage =  form['bannerimage'].value
        const slug = form['slug'].value
        const description = form['description'].value
        const uniqueSlug = createUniqueSlug(slug);


        const movie = {
            title: title,
            image: image,
            bannerimage : bannerimage,
            description: description,
            slug: uniqueSlug
        }
        const url = import.meta.env.VITE_API_BASE_URL
        axios.post(`${url}/movies/add-movie`, movie)
        .then((res) => {
            console.log(res)

        })
        .catch(error => {
            console.log(error)
        })
       // disptach(addMovie(movie));
        form.reset();
        navigate('/movies')
    }
    return (
        <main>
            <section className='container mx-auto px-4 py-16'>
                <h1 className='font-bold text-2xl'>Add New Movie</h1>
                <form ref={formRef} onSubmit={handleAddMovieSubmit} className='border-slate-400 flex flex-col gap-4 border mt-16 rounded-lg p-6'>
                    <label htmlFor='title'>Title</label>
                    <input className='p-2 border border-slate-400 outline-none' type='text' id='title'></input>
                    <label htmlFor='image'>Image</label>
                    <input className='p-2 border border-slate-400 outline-none' type='text' id='image'></input>
                    <label htmlFor='bannerimage'>BannerImage</label>
                    <input className='p-2 border border-slate-400 outline-none' type='text' id='bannerimage'></input>
                    <label htmlFor='slug'>Slug</label>
                    <input className='p-2 border border-slate-400 outline-none' type='text' id='slug'></input>
                    <label htmlFor='description'>Description</label>
                    <textarea className='p-2 border border-slate-400 outline-none' type='textarea' id='description'></textarea>
                    <button className='bg-orange-400 p-2 rounded-sm'>Add Movie</button>
                </form>
            </section>
        </main>
    )
}

export default AddMovie
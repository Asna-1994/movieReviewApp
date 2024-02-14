import { configureStore } from '@reduxjs/toolkit'
import reviewReducer from '../features/reviews/reviewSlice'
import movieReducer from '../features/movies/movieSlice'

export default configureStore({
  reducer: {
    reviews: reviewReducer,
    movies : movieReducer
  },
})
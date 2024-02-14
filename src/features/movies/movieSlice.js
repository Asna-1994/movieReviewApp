import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies  : [],
  },
  reducers: {
    
    addMovie: (state, action) => {
     state.movies.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMovie } = movieSlice.actions

export default movieSlice.reducer
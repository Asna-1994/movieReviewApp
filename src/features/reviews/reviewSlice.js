import { createSlice } from '@reduxjs/toolkit'

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: []
  },
  reducers: {

    addReview: (state, action) => {
      state.reviews.push(action.payload)
    },
    addMultipleReviews: (state, action) => {
      state.reviews = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addReview, addMultipleReviews } = reviewSlice.actions

export default reviewSlice.reducer
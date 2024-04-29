import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit';
import { getReviews } from '../services/getReviews';

export interface IReview {
  id: number;
  name: string;
  city: string;
  image: string;
  comment: string;
}

interface IReviewsState {
  reviews: IReview[];
  isLoading: boolean;
  error: SerializedError | null;
}

const initialState: IReviewsState = {
  reviews: [],
  isLoading: false,
  error: null,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getReviews.fulfilled,
      (state, action: PayloadAction<IReview[]>) => {
        state.isLoading = false;
        state.reviews = action.payload;
      }
    );
    builder.addCase(getReviews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { actions } = reviewsSlice;
export const { reducer: reviewsReducer } = reviewsSlice;

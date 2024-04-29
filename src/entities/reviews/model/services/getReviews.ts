import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IReview } from '../slice/reviewsSlice';

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IReview[]>(
        'http://localhost:8000/comments'
      );

      return response.data;
    } catch (e: unknown) {
      return thunkAPI.rejectWithValue(e as AxiosError);
    }
  }
);

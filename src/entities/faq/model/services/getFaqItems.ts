import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const getFaqItems = createAsyncThunk(
  'faq/getFaqItems',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:8000/FAQ');

      return response.data;
    } catch (e: unknown) {
      return thunkAPI.rejectWithValue(e as AxiosError);
    }
  }
);

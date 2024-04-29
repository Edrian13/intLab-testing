import { createAsyncThunk } from '@reduxjs/toolkit';
import { actions } from '../slice/userSlice';
import axios, { AxiosError } from 'axios';

export interface IUser {
  id: string;
  username: string;
  phoneNumber: string;
}

export const sendUserData = createAsyncThunk(
  'user/sendUserData',
  async (userData: IUser, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
      await axios.post('http://localhost:8000/users', userData);

      dispatch(actions.setPhoneNumber(''));
      dispatch(actions.setUsername(''));
    } catch (e: unknown) {
      return rejectWithValue(e as AxiosError);
    }
  }
);

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IUserState {
  username: string;
  phoneNumber: string;
}

const userState = {
  username: '',
  phoneNumber: '',
};

export const userSlice = createSlice({
  name: 'contact',
  initialState: userState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { actions } = userSlice;

export const { reducer: userReducer } = userSlice;

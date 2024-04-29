import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit';
import { getFaqItems } from '../services/getFaqItems';

export interface IFaq {
  id: number;
  answer: string;
  question: string;
}

interface IFaqState {
  faq: IFaq[];
  isLoading: boolean;
  error: null | SerializedError;
}

const faqState: IFaqState = {
  faq: [],
  isLoading: false,
  error: null,
};

export const faqSlice = createSlice({
  name: 'faq',
  initialState: faqState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFaqItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getFaqItems.fulfilled,
      (state, action: PayloadAction<IFaq[]>) => {
        state.isLoading = false;
        state.faq = action.payload;
      }
    );
    builder.addCase(getFaqItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { actions } = faqSlice;
export const { reducer: faqReducer } = faqSlice;

import { configureStore } from '@reduxjs/toolkit';
import { reviewsReducer } from '../../../entities/reviews/model/slice/reviewsSlice';
import { faqReducer } from '../../../entities/faq/model/slice/faqSlice';
import { userReducer } from '../../../features/getUserData/model/slice/userSlice';

export const store = configureStore({
  reducer: {
    reviewsReducer,
    faqReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

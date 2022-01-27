import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../store/users';

const store = configureStore(userSlice);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from '@reduxjs/toolkit';
import userReducer, { UserState } from './user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export interface RootState {
  user: UserState;
}

export type AppDispatch = typeof store.dispatch;

export default store;

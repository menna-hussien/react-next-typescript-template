// src/store/user.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  username: string;
  mobileNumber: string;
  password: string;
}

const initialState: UserState = {
  username: '',
  mobileNumber: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.username = action.payload.username;
      state.mobileNumber = action.payload.mobileNumber;
      state.password = action.payload.password;
    },
    deleteUser(state) {
      state.username = '';
      state.mobileNumber = '';
      state.password = '';
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

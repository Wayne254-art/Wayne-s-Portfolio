
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api/api'

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post(`/user/login`, credentials, { withCredentials: true })
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed')
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message || 'Something went wrong';
      });
  },
});

export default userSlice.reducer;

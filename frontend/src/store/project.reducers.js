// src/features/projectSlice.js (Redux Slice)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

// Async Thunk for form submission
export const submitProject = createAsyncThunk(
  'projects/submitProject',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('/upload-project', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitProject.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitProject.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitProject.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;

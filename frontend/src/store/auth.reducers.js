import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

// Async thunk for user login
export const loginUser = createAsyncThunk(
  "user/login",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/user/login", info);
      localStorage.setItem("accessToken", data.token);  // Store token in local storage
      return data;  // Returning user and token from the API response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message || "Login failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,         // User details (e.g., name, email)
    token: null,        // JWT token
    loading: false,     // Loading state for async actions
    error: null,        // Error message (if login fails)
  },
  reducers: {},        // You can add more reducers here later if needed
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        // console.log("Payload:", payload.user);  // Debug log
        state.loading = false;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;  // Set error message in case of failure
      });
  },
});

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  user: {},
  token: "",
};

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    let url = "auth/login";
    const res = await http.post(url, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const register = createAsyncThunk("/api/auth/register", async (data) => {
  try {
    let url = "/api/auth/register";
    const res = await http.post(url, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = {};
      state.token = "";
    },
  },
});

export const { setUser, deleteUser } = authSlice.actions;
export default authSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";

const VALID_EMAIL = "vimal@gmail.com";
const VALID_PASSWORD = "12345678";

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginCredentials, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      return { token: "static-auth-token" };
    }

    return rejectWithValue("Invalid email or password");
  }
);

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { isError, not201mes, typedCatchHandler } from "features/utils";
import { INewUser, IUser } from "interfaces";
import authService from "./authService";

interface IUserState {
  user: IUser;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  error: string | null;
}

// Get user from localstorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState: IUserState = {
  user: user ?? null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  error: "",
};

// Register new user
export const register = createAsyncThunk<IUser, INewUser, { rejectValue: string }>(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const { data, status } = await authService.register(user);

      return status === 201 ? data : rejectWithValue(not201mes);
    } catch (error) {
      // rejectWithValue с проверкой типа ошибки и шаблоном сообщения
      return typedCatchHandler(error, rejectWithValue, "auth/register");
    }
  },
);

// Login user
export const login = createAsyncThunk("auth/login", async (user, { rejectWithValue }) => {
  console.log(user);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser: () => ({ ...initialState, user: null }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      // .addCase(logout.fulfilled, (state) => {
      //   state.user = null;
      // })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { clearUser } = authSlice.actions;
export default authSlice.reducer;

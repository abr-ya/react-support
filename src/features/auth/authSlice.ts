import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { isError, not200mes, not201mes, typedCatchHandler } from "features/utils";
import { ILoginUser, INewUser, IUser } from "interfaces";
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
export const login = createAsyncThunk<IUser, ILoginUser, { rejectValue: string }>(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data, status } = await authService.login(user);

      return status === 200 ? data : rejectWithValue(not200mes);
    } catch (error) {
      // rejectWithValue с проверкой типа ошибки и шаблоном сообщения
      return typedCatchHandler(error, rejectWithValue, "auth/login");
    }
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("user");
      return { ...initialState, user: null };
    },
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
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

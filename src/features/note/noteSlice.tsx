import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootStateType } from "app/store";
import { getMessage } from "features/utils";
import { INote } from "interfaces";
import { getNotesReq } from "./noteService";

const initialState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get ticket's notes
export const getNotes = createAsyncThunk<INote[], string, { rejectValue: string }>(
  "notes/getAll",
  async (ticketId, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootStateType;
      return await getNotesReq(ticketId, state.auth.user.token);
    } catch (error) {
      return rejectWithValue(getMessage(error));
    }
  },
);

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    resetNotes: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetNotes } = noteSlice.actions;
export default noteSlice.reducer;

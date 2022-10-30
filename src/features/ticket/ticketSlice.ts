import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "app/store";
import { getMessage } from "features/utils";
import { INewTicket, ITicket } from "interfaces";
import { createTicketReq, getTicketsReq } from "./ticketService";

interface ITicketState {
  tickets: ITicket[];
  ticket: ITicket | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null;
}

const initialState: ITicketState = {
  tickets: [],
  ticket: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

export const createTicket = createAsyncThunk<ITicket, INewTicket, { rejectValue: string }>(
  "tickets/create",
  async (ticketData, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootStateType;
      return await createTicketReq(ticketData, state.auth.user.token);
    } catch (error) {
      return rejectWithValue(getMessage(error));
    }
  },
);

// Get user tickets
export const getTickets = createAsyncThunk("tickets/getAll", async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState() as RootStateType;
    return await getTicketsReq(state.auth.user.token);
  } catch (error) {
    return rejectWithValue(getMessage(error));
  }
});

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTicket.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tickets = action.payload;
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;

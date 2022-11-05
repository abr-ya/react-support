import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "app/store";
import { getMessage } from "features/utils";
import { INewTicket, IStatus, ITicket } from "interfaces";
import { createTicketReq, getTicketReq, getTicketsReq, setTicketStatusReq } from "./ticketService";

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
  isLoading: true,
  message: null,
};

// Create Ticket
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

// Get user ticket (detail)
export const getTicket = createAsyncThunk("tickets/getById", async (id: string, { getState, rejectWithValue }) => {
  try {
    const state = getState() as RootStateType;
    return await getTicketReq(id, state.auth.user.token);
  } catch (error) {
    return rejectWithValue(getMessage(error));
  }
});

// Close Ticket
export const setTicketStatus = createAsyncThunk<ITicket, { id: string; status: IStatus }, { rejectValue: string }>(
  "tickets/status",
  async ({ id, status }, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootStateType;
      return await setTicketStatusReq(id, status, state.auth.user.token);
    } catch (error) {
      return rejectWithValue(getMessage(error));
    }
  },
);

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
      })
      .addCase(getTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ticket = action.payload;
      })
      .addCase(getTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(setTicketStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setTicketStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ticket.status = action.payload.status;
        state.tickets.map((ticket) => (ticket._id === action.payload._id ? (ticket.status = "closed") : ticket));
      });
  },
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import noteReducer from "features/note/noteSlice";
import ticketReducer from "features/ticket/ticketSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    note: noteReducer,
    ticket: ticketReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

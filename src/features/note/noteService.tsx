import axios from "axios";
import { createConfig } from "features/utils";

const baseUrl = `${process.env.API_URL}`;
const TICKET_URL = `${baseUrl}/api/tickets/`;

// Get ticket notes
export const getNotesReq = async (ticketId, token) => {
  const response = await axios.get(`${TICKET_URL}${ticketId}/notes`, createConfig(token));

  return response.data;
};

// Create ticket note
export const createNoteReq = async (text, ticketId, token) => {
  const response = await axios.post(`${TICKET_URL}${ticketId}/notes`, { text }, createConfig(token));

  return response.data;
};

import axios from "axios";
import { createConfig } from "features/utils";

const baseUrl = `${process.env.API_URL}`;
const TICKET_URL = `${baseUrl}/api/tickets/`;

// Create new ticket
export const createTicketReq = async (ticketData, token) => {
  const response = await axios.post(TICKET_URL, ticketData, createConfig(token));

  return response.data;
};

// Get user tickets
export const getTicketsReq = async (token) => {
  const response = await axios.get(TICKET_URL, createConfig(token));

  return response.data;
};

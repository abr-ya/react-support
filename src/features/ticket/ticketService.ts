import axios from "axios";
import { createConfig } from "features/utils";

const baseUrl = `${process.env.API_URL}`;
const TICKET_URL = `${baseUrl}/api/tickets/`;

// Get user tickets
export const getTicketsReq = async (token) => {
  const response = await axios.get(TICKET_URL, createConfig(token));

  return response.data;
};

// Get user ticket
export const getTicketReq = async (id, token) => {
  const response = await axios.get(`${TICKET_URL}${id}`, createConfig(token));

  return response.data;
};

// Create new ticket
export const createTicketReq = async (ticketData, token) => {
  const response = await axios.post(TICKET_URL, ticketData, createConfig(token));

  return response.data;
};

// Set ticket status
export const setTicketStatusReq = async (id, status, token) => {
  const payload = { status };
  const response = await axios.put(`${TICKET_URL}${id}`, payload, createConfig(token));

  return response.data;
};

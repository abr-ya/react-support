import axios from "axios";
import { createConfig } from "features/utils";

const baseUrl = `${process.env.API_URL}`;
const TICKET_URL = `${baseUrl}/api/tickets/`;

// Get ticket notes
export const getNotesReq = async (ticketId, token) => {
  const response = await axios.get(`${TICKET_URL}${ticketId}/notes`, createConfig(token));

  return response.data;
};

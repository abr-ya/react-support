export interface INewUser {
  name: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface INewTicket {
  user: string;
  product: string;
  description: string;
}

export type IStatus = "new" | "open" | "closed";

export interface ITicket {
  _id: string;
  user: string;
  product: string;
  description: string;
  status: IStatus;
  createdAt: string;
  updatedAt: string;
}

export interface INote {
  _id: string;
  user: string;
  ticket: string;
  text: string;
  isStaff: boolean;
  createdAt: string;
  updatedAt: string;
}

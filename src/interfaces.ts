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

export interface ITicket {
  _id: string;
  user: string;
  product: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

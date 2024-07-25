import { Ticket } from "./events";

export interface UserType {
  username: string;
  tickets: Ticket[];
  passwordHash: string;
  readonly id?: string;
  password?: string;
}

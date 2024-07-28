export interface UserToLog {
  username: string;
  password: string;
}

export interface UserToken {
  username: string;
  token: string;
  tickets: Ticket[];
}

export interface CreateUser {
  username: string;
  tickets: Ticket[];
}

export interface Ticket {
  username: string;
  artist: string;
  type: string;
  eventId: string;
  place: string;
  date: string;
}

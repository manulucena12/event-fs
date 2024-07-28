export interface Event {
  readonly id?: string;
  artist: string;
  date: string;
  sites: Site[];
  city: string;
  img: string;
}

export interface Site {
  type: "general" | "vip" | "gold";
  available: number;
  price: number;
  persons: Person[];
}

export interface Person {
  readonly id?: string;
  username: string;
}

export interface BookSite {
  username: string;
  type: string;
  id: string;
}

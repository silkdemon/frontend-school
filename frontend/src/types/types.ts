export interface EventItem {
    date: string;
    likes: number;
    title: string;
    description: string;
    authors: string[];
    registrationActive: boolean;
  }
  
  export type OpenModalFunction = (event: EventItem) => void;
  export type CloseModalFunction = () => void;
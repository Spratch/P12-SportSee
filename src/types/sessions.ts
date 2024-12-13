export type Session = {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
};

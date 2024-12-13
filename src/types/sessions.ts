export type Sessions = {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
};

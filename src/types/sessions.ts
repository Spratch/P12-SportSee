export type SessionsType = {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
};

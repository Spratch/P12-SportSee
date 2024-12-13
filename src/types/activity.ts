export type Activity = {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
};

type Kind = {
  1: "cardio";
  2: "energy";
  3: "endurance";
  4: "strength";
  5: "speed";
  6: "intensity";
};

export type Performance = {
  userId: number;
  kind: Kind;
  data: {
    value: number;
    kind: number;
  };
};

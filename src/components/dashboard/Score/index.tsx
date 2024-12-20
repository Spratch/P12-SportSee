import "./score.scss";
import { UserType } from "../../../types/user";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

type Props = {
  score: UserType["todayScore"];
};

export default function Score({ score }: Props) {
  return (
    <article className="dashboard__chart dashboard__chart--score">
      <h2 className="score__title">Score</h2>

      {/* Arc graph */}
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="score__chart"
      >
        <PieChart
          width={400}
          height={400}
        >
          <Pie
            data={[{ value: 1 }]}
            dataKey="value"
            outerRadius={70}
            fill="white"
            stroke="none"
            isAnimationActive={false}
          />
          <Pie
            data={[
              { value: score * 100, fill: "#FF0000", stroke: "none" },
              { value: 100 - score * 100, fill: "none", stroke: "none" }
            ]}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            cornerRadius={50}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Score percentage */}
      <p className="score__percentage">
        <span>{score * 100}%</span>
        <br />
        de votre objectif
      </p>
    </article>
  );
}

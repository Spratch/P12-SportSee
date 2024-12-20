import "./performances.scss";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer
} from "recharts";
import { PerformanceType } from "../../../types/performance";

type Props = {
  performances: PerformanceType;
};

const kindTranslations = [
  "Cardio",
  "Energie",
  "Endurance",
  "Force",
  "Vitesse",
  "Intensité"
];

export default function Performances({ performances }: Props) {
  const data = performances.data.map((item) => ({
    kind: kindTranslations[item.kind - 1],
    value: item.value
  }));

  const startAngle = 210;

  return (
    <article className="dashboard__chart dashboard__chart--perf">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RadarChart
          outerRadius={80}
          data={data}
          startAngle={startAngle}
          endAngle={startAngle + 360}
        >
          <PolarGrid
            stroke="white"
            polarRadius={[10, 20, 40, 60, 80]}
          />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "white" }}
          />
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity="70%"
          />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  );
}

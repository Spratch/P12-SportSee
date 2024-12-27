import "./activity.scss";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { ActivityType } from "../../../types/activity";
import ActivtyTooltip from "./ActivityTooltip";

type Props = {
  activity: ActivityType;
};

export default function Activity({ activity }: Props) {
  return (
    <article className="dashboard__chart dashboard__chart--activity">
      {/* Title */}
      <h2>Activité quotidienne</h2>

      {/* Chart */}
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart
          data={activity.sessions}
          barSize={7}
          barGap={8}
        >
          <CartesianGrid
            stroke="#DEDEDE"
            vertical={false}
            strokeDasharray={"2"}
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={16}
            tickFormatter={(day) => new Date(day).getDate().toString()}
            tick={{ fill: "#9B9EAC" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount={3}
            tickMargin={35}
            tick={{ fill: "#9B9EAC" }}
          />
          <YAxis
            yAxisId="left"
            hide
          />
          <Tooltip
            content={<ActivtyTooltip />}
            cursor={{ fill: "#C4C4C480" }}
          />
          <Bar
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            yAxisId="right"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            yAxisId="left"
            radius={[3, 3, 0, 0]}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={9}
            height={50}
            wrapperStyle={{
              top: 0,
              right: 0,
              left: 0,
              width: "100%",
              fontSize: "0.875rem"
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  );
}

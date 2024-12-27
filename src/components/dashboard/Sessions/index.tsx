import "./sessions.scss";
import { SessionsType } from "../../../types/sessions";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import SessionsTooltip from "./SessionsTooltip";
import SessionsCursor from "./SessionsCursor";

type Props = {
  sessions: SessionsType;
};

export default function Sessions({ sessions }: Props) {
  // Mock a missing past (and add top padding by giving a higher value)
  const data = [
    {
      day: sessions.sessions[0].day - 2,
      sessionLength: sessions.sessions[0].sessionLength * 3
    },
    ...sessions.sessions
  ];

  // Format data date for the chart
  const formattedData = data.map((session) => ({
    day: new Date(Date.now() - (7 - (session.day + 1)) * 86400000)
      .toLocaleString("fr-FR", { weekday: "long" })[0]
      .toUpperCase(),
    sessionLength: session.sessionLength
  }));

  return (
    <article className="dashboard__chart dashboard__chart--sessions">
      {/* Title */}
      <h2 className="sessions__title">Durée moyenne des sessions</h2>

      {/* Chart */}
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="sessions__chart"
      >
        <LineChart data={formattedData}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            padding={{ left: -28, right: 14 }}
            tick={{ fill: "white" }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#line-gradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              strokeWidth: 5,
              stroke: "white",
              strokeOpacity: "20%",
              fill: "white"
            }}
          />
          <Tooltip
            cursor={<SessionsCursor />}
            content={<SessionsTooltip />}
          />

          <defs>
            <linearGradient
              id="line-gradient"
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
            >
              <stop
                offset="0%"
                stopColor="rgba(255, 255, 255, 0.3)"
              />
              <stop
                offset="100%"
                stopColor="rgba(255, 255, 255, 1)"
              />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
}

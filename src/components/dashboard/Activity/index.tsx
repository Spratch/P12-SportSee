import { ActivityType } from "../../../types/activity";

type Props = {
  activity: ActivityType;
};

export default function Activity({ activity }: Props) {
  return (
    <article className="dashboard__chart dashboard__chart--activity">
      <h2>Activité quotidienne</h2>
      <div className="chart__legend">
        <div className="legend__item legend__item--weight">Poids (kg)</div>
        <div className="legend__item legend__item--burned">
          Calories brûlées (kCal)
        </div>
      </div>
      {activity.sessions.map((session) => (
        <div
          key={session.day}
          className="chart__bar"
        >
          <div className="chart__bar__weight">{session.kilogram}kg</div>
          <div className="chart__bar__burned">{session.calories}kCal</div>
        </div>
      ))}
    </article>
  );
}

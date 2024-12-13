import { SessionsType } from "../../../types/sessions";

type Props = {
  sessions: SessionsType;
};

export default function Sessions({ sessions }: Props) {
  const averageSessionLength = sessions.sessions.reduce(
    (acc, session) => acc + session.sessionLength,
    0
  );

  return (
    <article className="dashboard__chart dashboard__chart--sessions">
      <h2>Durée moyenne des sessions: {averageSessionLength}</h2>
    </article>
  );
}

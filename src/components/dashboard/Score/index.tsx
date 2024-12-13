import { UserType } from "../../../types/user";

type Props = {
  score: UserType["todayScore"];
};

export default function Score({ score }: Props) {
  return (
    <article className="dashboard__chart dashboard__chart--score">
      <h2>score</h2>
      <p>
        <span className="">{score * 100}%</span> de votre objectif
      </p>
    </article>
  );
}

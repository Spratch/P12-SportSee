import { useParams } from "react-router-dom";
import "./profile.scss";

export default function Profile() {
  const { userId } = useParams();

  return (
    <main className="profile">
      <section className="profile__intro">
        <h1>
          Bonjour <span className="intro__name">{userId}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>

      <section className="profile__dashboard"></section>
    </main>
  );
}

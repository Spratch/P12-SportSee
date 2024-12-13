import { useParams } from "react-router-dom";
import "./profile.scss";
import { UserService } from "../../api/userService";

export default function Profile() {
  const { userId } = useParams();

  const user = UserService(userId);
  console.log(user);

  return (
    <main className="profile">
      <section className="profile__intro">
        <h1>
          Bonjour{" "}
          <span className="intro__name">{user?.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>

      <section className="profile__dashboard"></section>
    </main>
  );
}

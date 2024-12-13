import { useParams } from "react-router-dom";
import "./profile.scss";
import { UserService } from "../../api/userService";
import { ActivityService } from "../../api/activityService";
import { SessionsService } from "../../api/sessionsService";
import { PerformanceService } from "../../api/performanceService";

export default function Profile() {
  const { userId } = useParams();
  const user = UserService(userId);
  const activity = ActivityService(userId);
  const sessions = SessionsService(userId);
  const performance = PerformanceService(userId);

  if (!user) return <div>Chargement...</div>;
  const userInfos = user.userInfos;
  const keyData = user.keyData;

  console.log(
    "user:",
    userInfos.firstName + " " + userInfos.lastName + ",",
    "\nToday score:",
    user.todayScore,
    "\nKey data:",
    keyData,
    "\nActivity:",
    activity,
    "\nSessions:",
    sessions,
    "\nPerformance:",
    performance
  );

  return (
    <main className="profile">
      {user && (
        <section className="profile__intro">
          <h1>
            Bonjour <span className="intro__name">{userInfos.firstName}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
      )}

      <section className="profile__dashboard"></section>
    </main>
  );
}

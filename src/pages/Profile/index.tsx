import { useParams } from "react-router-dom";
import "./profile.scss";
import { UserService } from "../../api/userService";
import { ActivityService } from "../../api/activityService";
import { SessionsService } from "../../api/sessionsService";
import { PerformanceService } from "../../api/performanceService";
import Activity from "../../components/dashboard/Activity";
import Sessions from "../../components/dashboard/Sessions";
import Performances from "../../components/dashboard/Performances";
import Score from "../../components/dashboard/Score";
import KeyDatas from "../../components/dashboard/KeyDatas";

export default function Profile() {
  const { userId } = useParams();
  const user = UserService(userId);
  const activity = ActivityService(userId);
  const sessions = SessionsService(userId);
  const performance = PerformanceService(userId);

  console.log(
    "user:",
    user?.userInfos.firstName + " " + user?.userInfos.lastName + ",",
    "\nToday score:",
    user?.todayScore,
    "\nKey data:",
    user?.keyData,
    "\nActivity:",
    activity,
    "\nSessions:",
    sessions,
    "\nPerformance:",
    performance
  );

  return (
    <main className="profile">
      {/* Intro */}
      {user && (
        <section className="profile__intro">
          <h1>
            Bonjour{" "}
            <span className="intro__name">{user.userInfos.firstName}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
      )}

      {/* Dashboard */}
      <section className="profile__dashboard">
        {/* Activity */}
        {activity && <Activity activity={activity} />}

        {/* Sessions */}
        {sessions && <Sessions sessions={sessions} />}

        {/* Performances */}
        {performance && <Performances performances={performance} />}

        {/* Daily score */}
        {user?.todayScore && <Score score={user.todayScore} />}
      </section>

      {/* Key datas */}
      {user?.keyData && <KeyDatas keyDatas={user.keyData} />}
    </main>
  );
}

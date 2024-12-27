import { useParams } from "react-router-dom";
import "./profile.scss";
import Activity from "../../components/dashboard/Activity";
import Sessions from "../../components/dashboard/Sessions";
import Performances from "../../components/dashboard/Performances";
import Score from "../../components/dashboard/Score";
import KeyDatas from "../../components/dashboard/KeyDatas";
import { useEffect, useState } from "react";
import { ActivityType } from "../../types/activity";
import {
  fetchActivity,
  fetchPerformance,
  fetchSessions,
  fetchUser
} from "../../api/services";
import { UserType } from "../../types/user";
import { SessionsType } from "../../types/sessions";
import { PerformanceType } from "../../types/performance";

export default function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState<UserType | null>(null);
  const [activity, setActivity] = useState<ActivityType | null>(null);
  const [sessions, setSessions] = useState<SessionsType | null>(null);
  const [performance, setPerformance] = useState<PerformanceType | null>(null);

  // Fetch user, activity, sessions and performance data
  useEffect(() => {
    const fetchAllData = async () => {
      setUser(await fetchUser(userId));
      setActivity(await fetchActivity(userId));
      setSessions(await fetchSessions(userId));
      setPerformance(await fetchPerformance(userId));
    };

    fetchAllData();
  }, [userId]);

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

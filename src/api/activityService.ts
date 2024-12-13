import { useEffect, useState } from "react";
import { apiClient } from "./apiClient";
import { ActivityType } from "../types/activity";

export function ActivityService(userId: string | undefined) {
  const [activity, setActivity] = useState<ActivityType | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchActivity = async () => {
      try {
        const response = await apiClient(`user/${userId}/activity`);
        setActivity(response.data);
      } catch (error) {
        console.error("Failed to fetch user activity:", error);
      }
    };

    fetchActivity();
  }, [userId]);

  return activity;
}

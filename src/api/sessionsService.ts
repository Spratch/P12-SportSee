import { useEffect, useState } from "react";
import { apiClient } from "./apiClient";
import { Sessions } from "../types/sessions";

export function SessionsService(userId: string | undefined) {
  const [sessions, setSessions] = useState<Sessions | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchSessions = async () => {
      try {
        const response = await apiClient(`user/${userId}/average-sessions`);
        setSessions(response.data);
      } catch (error) {
        console.error("Failed to fetch user activity:", error);
      }
    };

    fetchSessions();
  }, [userId]);

  return sessions;
}

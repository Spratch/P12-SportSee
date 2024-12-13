import { useEffect, useState } from "react";
import { apiClient } from "./apiClient";
import { UserType } from "../types/user";

export function UserService(userId: string | undefined) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const response = await apiClient(`user/${userId}`);
        const { score, ...rest } = response.data;
        const formattedResponse = {
          ...rest,
          todayScore: response.data.todayScore || score
        };
        setUser(formattedResponse);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  return user;
}

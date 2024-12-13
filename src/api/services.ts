import { apiClient } from "./apiClient";

export const fetchUser = async (userId: string | undefined) => {
  if (!userId) return;
  try {
    const response = await apiClient(`user/${userId}`);
    const { score, ...rest } = response.data;
    const formattedResponse = {
      ...rest,
      todayScore: response.data.todayScore || score
    };
    return formattedResponse;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
};

export const fetchActivity = async (userId: string | undefined) => {
  if (!userId) return;
  try {
    const response = await apiClient(`user/${userId}/activity`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user activity:", error);
    return null;
  }
};

export const fetchSessions = async (userId: string | undefined) => {
  if (!userId) return;
  try {
    const response = await apiClient(`user/${userId}/average-sessions`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user sessions:", error);
    return null;
  }
};

export const fetchPerformance = async (userId: string | undefined) => {
  if (!userId) return;
  try {
    const response = await apiClient(`user/${userId}/performance`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user performance:", error);
    return null;
  }
};

import { useEffect, useState } from "react";
import { apiClient } from "./apiClient";
import { Performance } from "../types/performance";

export function PerformanceService(userId: string | undefined) {
  const [performance, setPerformance] = useState<Performance | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchPerformance = async () => {
      try {
        const response = await apiClient(`user/${userId}/performance`);
        setPerformance(response.data);
      } catch (error) {
        console.error("Failed to fetch user performance:", error);
      }
    };

    fetchPerformance();
  }, [userId]);

  return performance;
}

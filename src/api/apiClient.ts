const API_URL = "http://localhost:3000";

export const apiClient = async (endpoint: string) => {
  const url = `${API_URL}/${endpoint}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "An error occurred");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

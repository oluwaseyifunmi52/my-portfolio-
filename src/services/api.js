const BASE_URL =
    "https://my-portfolio-back-end-l6w2.onrender.com/api";

export const apiRequest = async (endpoint, options = {}) => {
    try {
        const response = await fetch(
            `${BASE_URL}${endpoint}`,
            {
                ...options,
                headers: {
                    "Content-Type": "application/json",
                    ...(options.headers || {}),
                },
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || "Something went wrong"
            );
        }

        return data;
    } catch (error) {
        console.error("API Request Error:", error);
        throw error;
    }
};
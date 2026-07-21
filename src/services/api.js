const BASE_URL =
    "https://my-portfolio-back-end-l6w2.onrender.com/api";

export const apiRequest = async (
    endpoint,
    options = {}
) => {
    const response = await fetch(
        `${BASE_URL}${endpoint}`,
        {
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
            ...options,
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Something went wrong"
        );
    }

    return data;
};
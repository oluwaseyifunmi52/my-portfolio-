const BASE_URL = "https://my-portfolio-back-end-l6w2.onrender.com/api";

const TIMEOUT_MS = 60000; // 60s — covers Render free-tier cold starts

export const apiRequest = async (endpoint, options = {}) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        // Safely parse JSON even if the server returns an empty/non-JSON body
        let data = null;
        const text = await response.text();
        try {
            data = text ? JSON.parse(text) : null;
        } catch {
            data = null;
        }

        if (!response.ok) {
            throw new Error(
                data?.message ||
                `Request failed with status ${response.status}`
            );
        }

        return data;

    } catch (error) {
        clearTimeout(timeoutId);

        if (error.name === "AbortError") {
            throw new Error(
                "The server is taking longer than expected to respond. Please try again."
            );
        }

        if (error.message === "Failed to fetch") {
            throw new Error(
                "Could not reach the server. Check your connection or try again shortly."
            );
        }

        console.error("API Request Error:", error);
        throw error;
    }
};

// Convenience helpers so calls elsewhere stay clean and consistent
export const apiGet = (endpoint) => apiRequest(endpoint);

export const apiPost = (endpoint, body) =>
    apiRequest(endpoint, {
        method: "POST",
        body: JSON.stringify(body),
    });

export const apiPut = (endpoint, body) =>
    apiRequest(endpoint, {
        method: "PUT",
        body: JSON.stringify(body),
    });

export const apiDelete = (endpoint) =>
    apiRequest(endpoint, { method: "DELETE" });
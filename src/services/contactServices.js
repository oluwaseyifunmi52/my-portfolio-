import { apiRequest } from "./api";


export const sendMessage = async (data) => {
    return apiRequest("/contact", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

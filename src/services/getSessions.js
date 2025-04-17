import { GET_SESSION_URI } from "@/types/apiUrls";

export const getAllSessions = async () => {
    try {
        const res = await fetch(
            GET_SESSION_URI
        );
        const data = await res.json();
        return data?.data || []
    } catch (error) {
        console.error("Error fetching sessions:", error);
    }
}

import axios from "redaxios";

export const BASE_URL = process.env.NEXT_PUBLIC_IXPERTA_ANALYTICS_API_URL

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

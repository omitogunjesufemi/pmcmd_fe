export default async function apiFetch(endpoint, options = {}) {
    let data;
    const url = import.meta.env.VITE_API_BASE_URL + endpoint;
    const config = {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        }
    }

    let response = await fetch(url, config);
    if (response.status === 401 && !config._retry) {
        console.log("Access token expired, refreshing token...");
        config._retry = true;

        try {
            const refreshUrl = import.meta.env.VITE_API_BASE_URL + "/auth/token/refresh";
            const refreshToken = await fetch(refreshUrl, {
                method: "POST",
                credentials: "include"
            });

            if (!refreshToken.ok) {
                throw new Error("Refresh failed");
            }
            response = await fetch(url, config);
        } catch (error) {
            console.error("Session expired. Please login again.");
            throw error;
        }
    }

    if (!response.ok) {
        const errorData = await response.json().catch(() => { })
        throw new Error(errorData?.message || "API request failed.");
    }

    if (response.status === 204) {
        data = null;
    }
    else {
        data = await response.json();
    }
    return { data, response }
}
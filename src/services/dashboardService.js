import apiFetch from "./api";

export async function getDashboard() {
    const { data } = await apiFetch('/core/dashboard');
    return data;
}
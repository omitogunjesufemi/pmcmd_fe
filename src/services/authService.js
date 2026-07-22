import apiFetch from "./api";

export async function login(email, password) {
    const { data } = await apiFetch('/auth/login', {
        method: "POST",
        body: JSON.stringify({ email, password })
    });
    return data;
}

export async function profile() {
    const { data } = await apiFetch('/auth/profile');
    return data;
}
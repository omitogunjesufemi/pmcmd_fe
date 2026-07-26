import apiFetch from "./api";

export async function login(email, password) {
    const { data } = await apiFetch('/auth/login', {
        method: "POST",
        body: JSON.stringify({ email, password })
    });
    return data;
}

export async function register(email, first_name, last_name, role, department, password) {
    const { data } = await apiFetch('/auth/register', {
        method: "POST",
        body: JSON.stringify({
            email, first_name, last_name, role, department, password
        })
    });

    return data;
}

export async function profile() {
    const { data } = await apiFetch('/auth/profile');
    return data.data;
}
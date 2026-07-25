import apiFetch from "./api";

export async function createInitiative(title, description, category_id, initiative_type_id, status) {
    const { data } = await apiFetch('/core/initiatives', {
        method: "POST",
        body: JSON.stringify({
            title, description, category_id, initiative_type_id, status
        })
    });
    return data;
}

export async function editInitiative(initiative_id, title, description, category_id, initiative_type_id, status) {
    const { data } = await apiFetch(`/core/initiatives/${initiative_id}`, {
        method: "PATCH",
        body: JSON.stringify({
            title, description, category_id, initiative_type_id, status
        })
    });
    return data;
}

export async function getInitiativeById(initiative_id) {
    const { data } = await apiFetch(`/core/initiatives/${initiative_id}`);
    return data;
}

export async function categoryList() {
    const { data } = await apiFetch('/core/categories');
    return data;
}

export async function initiativeTypeList() {
    const { data } = await apiFetch('/core/initiative_types');
    return data;
}


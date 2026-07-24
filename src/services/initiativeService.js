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

export async function categoryList() {
    const { data } = await apiFetch('/core/categories');
    return data;
}

export async function initiativeTypeList() {
    const { data } = await apiFetch('/core/initiative_types');
    return data;
}


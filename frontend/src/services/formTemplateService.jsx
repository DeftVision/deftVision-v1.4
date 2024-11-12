const API_URL = `${import.meta.env.VITE_API_URL}/api/form-templates`;

export const createFormTemplate = async (template) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(template)
    });
    return response.json();
}

export const getFormTemplates = async () => {
    const response = await fetch(API_URL);
    return response.json();
}

export const getFormTemplateId = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export const updateFormTemplate = async (id, updates) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
    })
    return response.json();
}

export const deleteFormTemplate = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })
}
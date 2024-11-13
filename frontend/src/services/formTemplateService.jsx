const API_URL = `${import.meta.env.VITE_API_URL}/api/template`;


export const getFormTemplates = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            console.log('Failed to fetch templates');
            return { templates: [] }; // Default to an object with an empty array
        }
        const data = await response.json();
        console.log('Raw API data:', data); // Confirm raw API response here
        return data; // Return full object with `templates` array
    } catch (error) {
        console.error('Error getting all templates', error);
        return { templates: [] }; // Default response if an error occurs
    }
};


export const createFormTemplate = async (template) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(template),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create template');
        }
        return response.json();
    } catch (error) {
        console.error('Error creating form template:', error);
        throw error; // Throw the error to be handled in the calling component
    }
};




// not used yet
/*
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
}*/

const formResponseModel = require('../models/formResponseModel');


exports.submitForm = async (req, res) => {
    const { templateId, formData } = req.body;

    try {
        const responses = Object.entries(formData).map(([fieldId, value]) => ({
            fieldId,
            value,
        }))

        const formResponse = newFormResponse({
            templateId,
            responses,
        });

        await formResponse.save();
        res.status(201).json({message: 'form submitted successfully', formResponse});
    } catch (error) {
        console.error('Error saving form response:', error);
        res.status(500).json({message: 'error submitting form', error});
    }
}
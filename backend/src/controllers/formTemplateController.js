const FormTemplate = require('../models/formTemplateModel');



exports.createFormTemplate = async (req, res) => {
    try {
        const formTemplate = new FormTemplate(req.body);
        await formTemplate.save();
        res.status(201).json({
            message: 'Successfully created form',
            formTemplate
        })
    } catch (error) {
        res.status(400).json({
            message: 'Error creating formTemplate',
            error: error.message
        })
    }
}

exports.getFormTemplates = async (req, res) => {
    try {
        const templates = await FormTemplate.find({})

        res.status(200).json({
            template_count: templates.length,
            templates
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error getting formTemplates',
            error: error.message
        })
    }
}

exports.getFormTemplate = async (req, res) => {
    try {
        const {id} = req.params;
        const formTemplate = await FormTemplate.findById(id);
        if(!formTemplate){
           return res.status(404).json({ message: 'form not found' })
        }
        return res.send(formTemplate)

    } catch (error) {
        res.send({
            message: 'Error getting formTemplate',
            error: error.message
        })
    }
}

exports.updateFormTemplate = async (req, res) => {
    try {
        const {id} = req.params;
        const template = req.body;
        const formTemplate = await FormTemplate.findByIdAndUpdate(id, template,{ new: true });
        if(!formTemplate){
            return res.send({
                message: 'Template not found.'
            })
        }
        res.send({
            message: 'Successfully updated form template',
            formTemplate
        })
    } catch (error) {
        return res.send({
            message: 'Error updating formTemplate',
            error: error.message
        })
    }
}

exports.deleteFormTemplate = async (req, res) => {
    try {
        const {id} = req.params;
        const formTemplate = await FormTemplate.findByIdAndDelete(id);
        if(!formTemplate){
            return res.send({
                message: 'Template not found.'
            })
        }
        res.send({
            message: 'Successfully deleted form template',
            formTemplate
        })
    } catch (error) {
        return res.send({
            message: 'Error deleting formTemplate',
            error: error.message
        })
    }
}
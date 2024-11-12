const FormTemplate = require('../models/formTemplateModel');
const res = require("express/lib/response");


exports.createFormTemplate = async (req, res) => {
    try {
        const formTemplate = new FormTemplate(req.body);
        await formTemplate.save();
        res.send({
            message: 'Successfully created form',
            formTemplate
        })
    } catch (error) {
        res.send({
            message: 'Error creating formTemplate',
            error: error.message
        })
    }
}

exports.getFormTemplates = async (req, res) => {
    try {
        const template = await FormTemplate.find({})
        if(!template){
            return res.send({
                message: 'Forms not Found'
            })
        }
        res.send({
            message: 'Successfully retrieved form templates',
            template
        })
    } catch (error) {
        res.send({
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
            return res.send({
                message: 'Form not Found'
            })
        }
        return res.send({
            formTemplate,
        })

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
        const formTemplate = await FormTemplate.findByIdAndUpdate(id, template,{ new: true});
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
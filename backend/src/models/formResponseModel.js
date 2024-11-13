const mongoose = require('mongoose');

const formResponseSchema = new mongoose.Schema({
    templateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FormTemplate', // Reference to the FormTemplate model
        required: true,
    },
    responses: [
        {
            fieldId: mongoose.Schema.Types.ObjectId,
            value: mongoose.Schema.Types.Mixed,
        },
    ],
    submittedAt: {
        type: Date,
        default: Date.now,
    },
});

const formResponseModel = mongoose.model('FormResponse', formResponseSchema);
module.exports = formResponseModel;

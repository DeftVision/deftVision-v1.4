const mongoose = require("mongoose");

const formTemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fields: [
        {
            label: { type: String, required: true },
            type: { type: String, required: true },
            isRequired: { type: Boolean, required: false },
            options: [String]
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("FormTemplate", formTemplateSchema);
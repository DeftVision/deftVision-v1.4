const mongoose = require("mongoose");

const formTemplateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fields: [
        {
            label: String,
            type: String,
            required: Boolean,
            options: [String]
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("FormTemplate", formTemplateSchema);
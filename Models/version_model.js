const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({

    versionNumber: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Version', versionSchema);
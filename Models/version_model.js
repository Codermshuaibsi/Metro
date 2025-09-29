const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({

    versionNumber: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    changes: { type: String, required: true },

}, { timestamps: true });

module.exports = mongoose.model('Version', versionSchema);
const mongoose = require('mongoose');

const metroStationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    line: {
        type: String, // Example: "Red Line", "Blue Line", "RRTS", etc.

    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        default: ""
    },
    isActive: {
        type: Boolean,
        default: true
    },
    openingTime: {
        type: String, // e.g. "06:00 AM"
        default: "06:00 AM"
    },
    closingTime: {
        type: String, // e.g. "11:00 PM"
        default: "11:00 PM"
    }
});

module.exports = mongoose.model('MetroStation', metroStationSchema);

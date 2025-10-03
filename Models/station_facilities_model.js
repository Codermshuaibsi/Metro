const mongoose = require('mongoose');

const stationFacilitySchema = new mongoose.Schema({
    stationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MetroStation',
        required: true
    },

    // Parking Information
    parkingAvailable: {
        type: Boolean,
        default: false
    },
    parkingType: {
        type: String,
        default: ""
    },
    parkingLatitude: {
        type: Number,
        default: null
    },
    parkingLongitude: {
        type: Number,
        default: null
    },
    parkingCapacity: { 
        type: Number,
        default: null
    },


    nearbyBusStop: {
        type: String,
        default: ""
    },
    busStopLatitude: {
        type: Number,
        default: null
    },
    busStopLongitude: {
        type: Number,
        default: null
    },

    hasATM: {
        type: Boolean,
        default: false
    },
    hasToilet: {
        type: Boolean,
        default: false
    },
    hasElevator: {
        type: Boolean,
        default: false
    },
    hasEscalator: {
        type: Boolean,
        default: false
    },

    nearbyShops: [
        {
            name: String,
            category: String,
            latitude: Number,
            longitude: Number
        }
    ],

    notes: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('StationFacility', stationFacilitySchema);

const express = require('express');
const router = express.Router();
const {
    upsertFacility,
    getFacilityByStation,
    deleteFacility
} = require('../Controllers/station_facilities_controllers');

// Create or Update
router.post('/facility', upsertFacility);

// Get Facility for a Station
router.get('/facility/:stationId', getFacilityByStation);

// Delete Facility
router.delete('/facility/:stationId', deleteFacility);

module.exports = router;

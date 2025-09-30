const express = require('express');
const router = express.Router();
const metroController = require('../Controllers/metro_controllers');

// Routes
router.post('/stations', metroController.addStation);
router.get('/stations', metroController.getStations);
router.get('/stations/:id', metroController.getStationById);
router.put('/stations/:id', metroController.updateStation);
router.delete('/stations/:id', metroController.deleteStation);

module.exports = router;

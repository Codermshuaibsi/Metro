const MetroStation = require('../Models/metro_models');

// Add New Station
exports.addStation = async (req, res) => {
    try {
        const station = new MetroStation(req.body);
        await station.save();
        res.status(201).json({ message: "Metro station added", station });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Stations
exports.getStations = async (req, res) => {
    try {
        const stations = await MetroStation.find();
        res.json(stations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Station by ID
exports.getStationById = async (req, res) => {
    try {
        const station = await MetroStation.findById(req.params.id);
        if (!station) return res.status(404).json({ message: "Station not found" });
        res.json(station);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Station
exports.updateStation = async (req, res) => {
    try {
        const station = await MetroStation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!station) return res.status(404).json({ message: "Station not found" });
        res.json({ message: "Station updated", station });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Station
exports.deleteStation = async (req, res) => {
    try {
        const station = await MetroStation.findByIdAndDelete(req.params.id);
        if (!station) return res.status(404).json({ message: "Station not found" });
        res.json({ message: "Station deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

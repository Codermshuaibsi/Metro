const StationFacility = require('../Models/station_facilities_model');

// Create or Update Facility for a Station
exports.upsertFacility = async (req, res) => {
    try {
        const { stationId } = req.body;

        if (!stationId) return res.status(400).json({ message: "stationId is required" });

        const facility = await StationFacility.findOneAndUpdate(
            { stationId },
            req.body,
            { new: true, upsert: true }
        );

        res.status(200).json(facility);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Facility Details by Station ID
exports.getFacilityByStation = async (req, res) => {
    try {
        const { stationId } = req.params;

        const facility = await StationFacility.findOne({ stationId }).populate('stationId');

        if (!facility) return res.status(404).json({ message: "No facility data found" });

        res.status(200).json(facility);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Facility Data
exports.deleteFacility = async (req, res) => {
    try {
        const { stationId } = req.params;

        await StationFacility.findOneAndDelete({ stationId });

        res.status(200).json({ message: "Facility data deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

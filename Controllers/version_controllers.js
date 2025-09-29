const Version = require('../Models/version_model');

async function create_version(req, res) {
    try {
        const existingVersion = await Version.findOne({ versionNumber: req.body.versionNumber });
        if (existingVersion) {
            return res.status(400).json({ message: 'Version already exists' });
        }
        const newVersion = new Version(req.body);
        await newVersion.save();
        res.status(200).json({
            message: 'Version created',
            is_latest: true,
            version: newVersion

        });

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

async function update_version(req, res) {
    try {
        const version = await Version.findByIdAndUpdate(req.body, { new: true });
        if (!version) {
            return res.status(404).json({ message: 'Version not found' });
        }
        res.status(200).json({
            message: 'Version updated',
            version: version,
            is_latest: true
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

async function get_version(req, res) {
    try {
        const version = await Version.findOne();
        if (!version) {
            return res.status(404).json({ message: 'No version found' });
        }
        res.status(200).json({
            message: 'Latest version fetched',
            version: version,
            is_latest: true
        });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    create_version,
    update_version,
    get_version
}; 
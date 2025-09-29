const express = require('express');
const { get_version, update_version, create_version } = require('../Controllers/version_controllers');

const router = express.Router();

router.get('/version', get_version);
router.put('/version', update_version);
router.post('/version', create_version)

module.exports = router;
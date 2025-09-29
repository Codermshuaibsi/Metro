const express = require('express');
const { version_get } = require('../Controllers/Version_Controllers');

const router = express.Router();

router.get('/version',version_get);

module.exports = router;
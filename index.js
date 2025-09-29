const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


// Routes 
const versionRoute = require('./Routes/version_routes');

app.use('/api/v1',versionRoute);

app.listen(3000, () => {
    console.log('server is running');
})
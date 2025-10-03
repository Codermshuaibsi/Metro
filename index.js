const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Database connection

mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(cors());
app.use(express.json());


// Routes 
const versionRoute = require('./Routes/version_routes');
const metroRoute = require('./Routes/metro_routes');
const stationFacilitiesRoute = require('./Routes/station_facilities_routes');

app.use('/api/v1', versionRoute);
app.use('/api/v1', metroRoute);
app.use('/api/v1',stationFacilitiesRoute)

app.listen(process.env.PORT, () => {
    console.log(`server is running ${process.env.PORT}`);
})
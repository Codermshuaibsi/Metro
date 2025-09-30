const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://heyshuaib43_db_user:shuaib@meerutmetro.utrofap.mongodb.net/',
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

app.use('/api/v1', versionRoute);
app.use('/api/v1', metroRoute);

app.listen(3000, () => {
    console.log('server is running');
})
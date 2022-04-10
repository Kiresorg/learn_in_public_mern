const express = require('express');
const cors = require('cors');
const req = require('express/lib/request');


// create the running web app
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "You made it to the root of the app"});
})


// routes
require('./src/router/route.address')(app);


app.listen(8080, () => {
    console.log('Server is running on port 8080');
})
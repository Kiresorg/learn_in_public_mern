// receives HTTP req from server.js
// has the route handlers

module.exports = app => {
    var router = require("express").Router();
    
    // GET all Addresses
    router.get('/', (req, res) => {
        // call the controller
        res.json({ message: "You reached the address router"});
    })
    
    app.use('/api/address', router);
  };

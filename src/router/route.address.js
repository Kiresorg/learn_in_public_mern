// receives HTTP req from server.js
// has the route handlers

module.exports = app => {
    var router = require("express").Router();
    const controller = require("../controller/controller.address");
    
    // GET all Addresses
    router.get('/', controller.findAll);
    
    app.use('/api/address', router);
  };

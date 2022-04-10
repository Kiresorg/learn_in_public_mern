const db = require('../sequelize/models');
const Address = db.Address;

exports.findAll = (req, res) => {
    Address.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error occurred while retrieving addresses.",
        });
      });
  };
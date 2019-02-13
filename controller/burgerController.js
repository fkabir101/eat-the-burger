const db = require("../db/connection");

module.exports = {
  findAll: function (req, res) {
    db.query("SELECT * FROM burgers", function (err, dbData) {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json(err);
      }
      res.json(dbData);
    });
  },
  findById: function (req, res) {
    db.query("SELECT * FROM burgers WHERE id = ?", [req.params.id], function (err, dbData) {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json(err);
      }
      res.json(dbData[0]);
    });
  },
  create: function (req, res) {
    console.log("create");
    db.query("INSERT INTO burgers SET ?", req.body, function (err, dbData) {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json(err);
      }
      res.json(dbData);
    });
  },
  update: function (req, res) {
    console.log("update");
    db.query("UPDATE burgers SET eaten = true WHERE id =?", [req.params.id], function (err, dbData) {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json(err);
      }
      res.json(dbData);
    })
  },
  delete: function (req, res) {
    console.log("delete");
    db.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function (err, dbData) {
        if (err) {
          console.log(err);
          return res.status(400).json(err);
        }
        res.json(dbData);
      });
  }
}
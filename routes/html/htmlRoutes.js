const router = require("express").Router();
const db = require("../../db/connection");

router.route("/")
  .get(function(req, res){
    db.query("SELECT * FROM burgers", function(error, dbData){
      if(error){
        console.log(error);
        return res.status(500).json(err);
      }
      res.render("burgers", {burgerList: dbData});
    });
  });

module.exports = router;
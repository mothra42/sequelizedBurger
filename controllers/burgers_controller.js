var express = require("express");

var router = express.Router();

var db = require("../models/");


router.get("/", function(req, res)
{
  db.Burger.findAll({})
    .then(function(results)
    {
      var hbsObject = {burgers: results};
      console.log("hbsObject: " + hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/", function(req, res)
{
  db.Burger.create({
    name: req.body.name,
  }).then(function(results)
  {
    console.log(results);
    res.redirect("/");
  });
});

router.put("/:id", function(req, res)
{
  db.Burger.update({
    devoured: true,
    },
    {
      where: {
        id: req.params.id
      }
  }).then(function(results)
  {
    console.log(results);
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res)
{
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(results)
  {
    res.redirect("/");
  });
});

module.exports = router;

const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities/new", (req, res) => {
  res.render("../views/celebrities/new.hbs");
});

router.get("/celebrities", (req, res) => {
    Celebrity.find({})
      .then(documents => {
        // this function runs WHEN the promise succeeds
  
        // res.send(documents);
        res.render("../views/celebrities/index.hbs", { celebrities: documents });
      })
      .catch(err => {
        // this function runs WHEN the promise rejects
        console.log(err);
      });
  });

  router.post("/celebrities", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({
      name,
      occupation,
      catchPhrase
    })
    .then(newCelebrity => {
      res.redirect("/celebrities/" + newCelebrity._id);
    })
    .catch(err => {
      console.log(err);
    });
  })

  router.post("/celebrities", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({
      name,
      occupation,
      catchPhrase
    })
    .then(newCelebrity => {
      res.redirect("/celebrities/" + newCelebrity._id);
    })
    .catch(err => {
      console.log(err);
    });
  })

  router.get("/celebrities/:celebritiesId", (req, res) => {
    Celebrity.findById(req.params.celebritiesId)
      .then(celebrity => {
        res.render("../views/celebrities/show.hbs", { details: celebrity });
      })
      .catch(err => {
        console.log(err);
      });
  });

  

module.exports = router;

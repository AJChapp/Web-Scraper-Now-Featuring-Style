const db = require('../models');
const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose')

module.exports = function (app) {
  app.get("/api/articles", function (req, res) {
    db.Article.find({})
    .populate('notes')
      .then(function (data) {
        res.json(data);
      }).catch(function (err) {
        res.json(err)
      })
  });

  app.get("/api/articles/:id", function (req, res) {
    db.Article.find({ _id: mongoose.Types.ObjectId(req.params.id) })
      .populate('notes')
      .then(function (data) {
        res.json(data);
      }).catch(function (err) {
        res.json(err)
      })
  });

  app.get("/api/note/delete/:id", function (req, res) {
    db.Note.remove({ _id: mongoose.Types.ObjectId(req.params.id) }).then(function (updatedNote) {
      console.log(updatedNote)
      res.json({success: true})
    }).catch(function (err) {
      res.json(err);
    })
  })

  app.post("/api/articles/:id", function (req, res) {

    db.Note.create({ title: req.body.title, body: req.body.body })
      .then(function (notes) {
        console.log(req.params.id)

        return db.Article.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) },
         { $push: { notes: mongoose.Types.ObjectId(notes._id) } }, { new: true });
      })
      .then(function (dbUser) {
        console.log(dbUser)
        res.json(dbUser);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.get("/api/scrape", function (req, res) {
    axios.get("http://www.echojs.com/").then(function (response) {
      const $ = cheerio.load(response.data);

      $("article h2").each(function (i, element) {
        const result = {};

        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");

        db.Article.create(result)
          .then(function (dbArticle) {
            
          }).catch(function (err) {
            return res.json(err);
          });
      });
      res.json({success:true})
      // res.redirect(`http://localhost:3000`);
    });
  });
} 
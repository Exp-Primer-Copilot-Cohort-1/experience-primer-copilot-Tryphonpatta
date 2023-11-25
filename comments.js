//webserver
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');

//GET /comments
//find all comments
router.get('/', function(req, res, next) {
  Comment.find(function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

//POST /comments
//save new comment
router.post('/', function(req, res, next) {
  Comment.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//GET /comments/:id
//find comment by id
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//PUT /comments/:id
//update comment by id
router.put('/:id', function(req, res, next) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//DELETE /comments/:id
//delete comment by id
router.delete('/:id', function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

// Path: comment.js
//webserver
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');

//GET /comments
//find all comments
router.get('/', function(req, res, next) {
  Comment.find(function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

//POST /comments
//save new comment
router.post('/', function(req, res, next) {
  Comment.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//GET /comments/:id
//find comment by id
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post
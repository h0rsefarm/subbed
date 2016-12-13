var express = require('express');
var subscriptionRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var router = function(nav) {

   subscriptionRouter.route('/')
      .get(function(req, res) {
         var url = 'mongodb://localhost:27017/subbed';
         mongodb.connect(url, function(err, db) {
            var collection = db.collection('subscriptions');

            collection.find().toArray(
               function(err, results) {
                  res.render('MySubs', {
                     title: 'Subbed',
                     name: 'My Subs',
                     nav: nav,
                     subs: results
                  });
               }
            );
         });
      });

   subscriptionRouter.route('/:id')
      .get(function(req, res) {
         var id = new objectId(req.params.id);
         var url = 'mongodb://localhost:27017/subbed';
         mongodb.connect(url, function(err, db) {
            var collection = db.collection('subscriptions');

            collection.findOne({_id: id}, function(err, results) {
               res.render('subscription', {
                  title: 'Sub',
                  nav: nav,
                  sub: results
               });
            });
         });
      });

   return subscriptionRouter;
};

module.exports = router;

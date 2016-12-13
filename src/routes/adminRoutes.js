var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
/*
var subs = [
   {
      name: 'Adobe Illustrator',
      cost: 21.39,
      interval: 'Monthly',
      date: 7
   },
   {
      name: 'Spotify',
      cost: 16.33,
      interval: 'Monthly',
      date: 6
   },
   {
      name: 'Newspaper',
      cost: 2.38,
      interval: 'Weekly',
      date: 'Tuesday'
   },
   {
      name: 'Expensive Software',
      cost: 114.89,
      interval: 'Bi-Week',
      date: [15, 30]
   },
   {
      name: 'Adobe Photoshop',
      cost: 11.39,
      interval: 'Monthly',
      date: 7
   },
   {
      name: 'Music Software',
      cost: 51.43,
      interval: 'Monthly',
      date: 28
   }
];
*/
var router = function(nav) {
   /*
   adminRouter.route('/addSubs')
      .get(function(req, res) {
         var url = 'mongodb://localhost:27017/subbed';
         mongodb.connect(url, function(err, db) {
            var collection = db.collection('subscriptions');
            collection.insertMany(subs, function(err, results) {
               res.send(results);
               db.close();
            });
         });
      });
*/
   return adminRouter;
};

module.exports = router;

var express = require('express');
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var app = new express();
var port = process.env.PORT;
var appName = 'Subbed';
var nav = [
   {link: '/', text: 'Home'},
   {link: '/MySubs', text: 'My Subs'},
   {link: '/EditSubs', text: 'Edit Subs'},
   {link: '/Notifications', text: 'Notifications'}
];
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

var subscriptionRouter = require('./src/routes/subscriptionRoutes.js')(nav);
var adminRouter = require('./src/routes/adminRoutes.js')(nav);
var editRouter = require('./src/routes/editRoutes.js')(nav);
var notificationsRouter = require('./src/routes/notificationRoutes.js')(nav);

app.use('/MySubs', subscriptionRouter);
app.use('/EditSubs', editRouter);
app.use('/Notifications', notificationsRouter);
app.use('/Admin', adminRouter);

app.use(express.static('public'));
app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', '.hbs');
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.get('/', function(req, res) {
   var url = 'mongodb://localhost:27017/subbed';
   mongodb.connect(url, function(err, db) {
      var collection = db.collection('subscriptions');

      collection.find().toArray(
         function(err, results) {
            res.render('index', {
               title: 'Subbed',
               name: 'My Subs',
               nav: nav,
               subs: results
            });
         }
      );
   });
});

app.listen(port, function(err) {
   console.log('Listening on port: ' + port);
});

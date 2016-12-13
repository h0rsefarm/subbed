var express = require('express');
var notificationsRouter = express.Router();

var router = function(nav) {

   notificationsRouter.route('/')
      .get(function(req, res) {
         res.render('Notifications', {title: 'Subbed', name: 'Notification Settings', nav: nav});
      });

   return notificationsRouter;
};

module.exports = router;

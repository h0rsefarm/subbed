var express = require('express');
var editRouter = express.Router();

var router = function(nav) {

   editRouter.route('/')
      .get(function(req, res) {
         res.render('EditSubs', {title: 'Subbed', name: 'Edit Subs', nav: nav});
      });

   return editRouter;
};

module.exports = router;

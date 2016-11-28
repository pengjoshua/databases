var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) { console.log('messages get error'); }
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messsages.post(params, (err, results) => {
        if (err) { console.log('messages post error'); }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) { console.log('users get error'); }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post((err, results) => {
        if (err) { console.log('users post error'); }
        res.sendStatus(201);
      });
    }
  }
};


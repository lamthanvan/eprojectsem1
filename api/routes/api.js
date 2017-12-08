'use strict';
var cors = require('cors');
var corsOptions = {
  origin: 'localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
module.exports = function(app) {
    var api = require('../controllers/apiController');

    // api Routes
    app.route('/video')
        .get(api.list_all_videos)
        .post(api.create_a_video);


    app.route('/video/:videoId')
        .get(api.read_a_video)
        .put(api.update_a_video)
        .delete(api.delete_a_video);
};
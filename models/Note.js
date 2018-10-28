var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({

  journal_date : "",
  title : "",
  best_moment : "",
  health_message : "",
  family_message : "",
  future_message : "",
  tmrw_message : "",
  reaction : "",
  className:""

});

module.exports = mongoose.model('Note', NoteSchema);

var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({

  journal_date : "",
  title:"",
  message:"",
  reaction:"",
  className:""

});

module.exports = mongoose.model('Note', NoteSchema);

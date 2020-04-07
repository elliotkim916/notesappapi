'use strict';

const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true,
    unique: true
  }
});

NoteSchema.methods.serialize = function() {
  return {
    title: this.title,
    content: this.content,
    id: this.id
  };
};

module.exports = mongoose.model('Note', NoteSchema);
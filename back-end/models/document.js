const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Document = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String
  },
  { collection: 'cb_document' }
);

module.exports = mongoose.model('Document', Document);

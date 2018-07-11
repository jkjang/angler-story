const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const config = require('../config');

/** cb_user_auth schema */
const UserAuth = new Schema(
  {
    id: Schema.Types.ObjectId,
    userId: String,
    pw: String,
    pwType: String,
    pwUpdated: String,
    email: String
  },
  { collection: 'cb_user_auth' }
);

// find one user by using username
UserAuth.statics.findOneByUsername = function(email) {
  return this.findOne({
    email
  }).exec();
};

// verify the password of the User documment
UserAuth.methods.verify = function(pw) {
  const encrypted = crypto
    .createHmac('sha1', config.secret)
    .update(pw)
    .digest('base64');
  console.log(this.pw === encrypted);

  return this.pw === encrypted;
};

module.exports = mongoose.model('UserAuth', UserAuth);

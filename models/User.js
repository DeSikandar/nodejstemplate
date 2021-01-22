const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      loadClass: true,
      required: true,
    },
    password: {
      type: String,
      select: false,
    },
  },
  { timestamps: true },
  { collection: 'users' }
);

UserSchema.pre('save', function (next) {
  if (this.password)
    this.password = bcrypt.hashSync(
      this.password,
      bcrypt.genSaltSync(12),
      null
    );
  next();
});

module.exports = mongoose.model('User', UserSchema);

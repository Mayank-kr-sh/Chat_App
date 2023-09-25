const mongooes = require("mongoose");
const userSchema = mongooes.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdim: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongooes.model("User", userSchema);

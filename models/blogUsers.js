const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogUserSchema = new Schema({
  email: { type: String, required: true},
  blogPosts: { type: Array }
  //colorIndicator: {}
});


const blogUsers = mongoose.model("blogUsers", blogUserSchema);

module.exports = blogUsers;
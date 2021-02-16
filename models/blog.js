const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title:{type:String},
    body:{type:String},
    tags:{type:[String]},
});
module.exports = mongoose.model('blog',blogSchema);
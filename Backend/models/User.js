const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
   username:{
      type: String,
      required: true
   },
   name:{
       type: String,
       require: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   address: {
    type: String,
    required: true
 },
   mobile: {
    type: Number,
    required: true
 }
},

  {
   timestamps: true,
   collection: 'users'
})
module.exports = mongoose.model('User', userSchema);
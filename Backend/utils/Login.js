const mongoose = require('mongoose');
const User = require('../Model/UserModel');
const activeTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
       
    },
   user_id:{
         type: Mongoose.Schema.Types.ObjectId,
            ref: 'User',
        
   },
   expireAt: {
   type: Date,
   expires:'1m',
}}
)
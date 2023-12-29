require('dotenv').config();
const mongoose = require('mongoose')
const mongoDBConnection = mongoose.connect(`mongodb+srv://singh-csm:GIUPM5681K@singh-csm.nmfw5jk.mongodb.net/test-travelious`).then(()=>console.log("database connected!!!")).catch((err)=>{console.log("error! - while connecting!")})
module.exports = mongoDBConnection

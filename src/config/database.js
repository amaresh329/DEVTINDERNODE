const mongoose = require('mongoose');
const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://abcd:abcd1234@cluster0.rfnapzt.mongodb.net/devTinder")
}
module.exports=connectDB;
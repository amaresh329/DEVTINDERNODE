const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3,
        trim:true,
    },
    lastName:{
        type:String,
        trim:true,
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender is not valid");
            }
        }
    },
    photoUrl:{
        type:String,
    },
   about:{
    type:String,
    default:"Say about yourself",

    },
    skills:{
        type:[String],

    }
},
{ 
    timestamps: true
}
);

// const User=mongoose.model("User",userSchema);
// module.exports=User;

module.exports=mongoose.model("User",userSchema);
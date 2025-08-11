const express=require("express");
const app=express();

// app.use("/user",
//     (req,res,next)=>{
//     next();
//     res.send("listenig to server1");
  
// },
//     (req,res)=>{
//     res.send("listenig on server2");
// }
// )
// app.get("/user/:id/:name",(req,res)=>{
//     console.log(req.params);
//     let {id,name}=req.params
//     res.send(`<h1>parameters passed successfully id=${id},name=${name}</h1>`)
// })

// //This will only handle GET call to /user
// app.get("/user/:userid",(req,res)=>{
//     // console.log(req.query);
//     console.log(req.params);//if there are any additional parameters afetr the /user
//     res.send({firstName:"Amaresh",lastName:"Vutukuri"})
// })

// // app.get("/user",(req,res)=>{
// //     console.log(req.query);
   
// //     let {q}=req.query;
// //      if(!q){
// //         res.send(`<h1>nothing searched</h1>`)
// //     }
// //     res.send(`<h1>these are the search results for the query:${q}</h1>`);
// // })



// app.get("/user",(req,res)=>{
//     console.log(req.query);
//     console.log(req.params);//if there are any additional parameters afetr the /user
//     res.send({firstName:"Amaresh",lastName:"Vutukuri"})
// })

// // app.get(/\/ab(c)?d/,(req,res)=>{
// //     res.send("here catch is optional while calling the path")
// // })

// app.post("/user",(req,res)=>{
//     res.send("user data posted successfully")
// })

// app.delete("/user",(req,res)=>{
//     res.send("user data deleted successfully")
// })

// //tis will match all the HTTP method API calls to /test
// app.use("/test",(req,res)=>{
//     res.send("app listening on test")
// })

// app.use("/hello/2",(req,res)=>{
//    res.send("app listening on nested routes of hello")
// })

// app.use("/hello",(req,res)=>{
//     res.send("app listening on hellopage")
// })


// app.use("/",(req,res)=>{
//     res.send("app listening on port Home page")
// })

//even we can wrap these 5routes in an array
// app.use("/user",
//     (req,res,next)=>{
//     next();
//     // res.send("listening on server1");
    
//     },
//     (req,res,next)=>{
//         next();
//         // res.send("listening on server2")
//     },
//     (req,res,next)=>{
//         next();
//         // res.send("server listening on server3")
//     },
//     (req,res,next)=>{
//         next()
//         // res.send("server listening on server4")
//     },
//     (req,res,)=>{
        
//         res.send("server listening on server5")
//     }
// )

// const{adminAuth,userAuth}=require('./middlewares/auth')

// app.use("/admin",adminAuth)

// app.use("/user",userAuth,(req,res)=>{
//     res.send("user data is authenticated")
// })
// app.get("/admin/getAllData",(req,res)=>{
//     res.send("All Data Sent");
// })

// app.get("/admin/deleteUSer",(req,res)=>{
//     res.send("deleted a user")
// })

// app.get("/getUserData",(req,res)=>{
//      try{
//          throw new Error("fdwfaf");
//          res.status(500).send("userdata send")
//     }catch(err){
//         res.status(500).send("Something went wrong please contact customer support");
//     }
    
// })
// app.use("/",(err,req,res,next)=>{
//    if(err){
//     res.status(500).send("something went wrong")
//    }
// })

const User=require('./models/user')
app.use(express.json()); //A middleware to read the json data which is coming from body in postman

app.post("/signup",async(req,res)=>{
   // const user=new User({
      // firstName:"Rajesh",
      // lastName:"Bandaru",
      // emailId:"sandeepjavvaji9848@gmail.com",
      // password:"Sandeep@123"
   // });
   const user=new User(req.body);//which makes our userdata dynamic
   try{
      await user.save();
      res.send("user data stored successfully")
   }catch(err){
      res.status(400).send("Error saving the user:"+err.message)
   }
})

//get user by email
app.get("/user",async(req,res)=>{
   const userEmail=req.body.emailId;
   console.log(userEmail);
   try{
      const user=await User.findOne({emailId:userEmail});
      if(!user){
         res.status(400).send("user does not exist")
      }
      else{
         res.status(200).send(user);
      }
      
   //  const users=await User.find({emailId:userEmail})
   //  if(users.length===0){
   //     res.status(400).send("user does not exist")
   //  }else{
   //    res.status(200).send(users);
   //  }  
   }catch(err){
     res.status(400).send("Something went wrong")
   }
})

//Feed API-Get/feed-get all the users from the database
app.get("/feed",async(req,res)=>{

   try{
    const users=await User.find({})
    res.send(users)
   }catch(err){
    res.status(400).send("Something went wrong")
   }
})

//delete an user
app.delete("/user",async(req,res)=>{
   const userId=req.body.userId;
   try{
      await User.findOneAndDelete({_id:userId});
      res.status(200).send("user data deleted successfully")
   }catch(err){
      res.status(400).send("Something Went Wrong")
   }
})


//update an user
app.patch("/user",async(req,res)=>{
   const userId=req.body._id;
   const data=req.body;
   console.log(data);
   try{
      const user=await User.findByIdAndUpdate(userId, data,{
         new: true, // returns the updated document
         runValidators: true // runs schema validations on the update
      });
      res.status(200).send("user updated successfully: ");     
   }catch(err){
      res.status(400).send("Something went wrong: " + err.message);
   }
})

// app.patch("/user",async(req,res)=>{
//    const emailId=req.body.emailId;
//    const data=req.body; 
// const user=await User.findOneAndUpdate({emailId:emailId}, data, { new: true });   // 'new: true' returns the updated document
//    if(!user){
//       res.status(400).send("user does not exist")
//    }else{
//       res.status(200).send("user updated successfully: " + user);
//    }
// }) 

const connectDB=require('./config/database');
const { SchemaTypeOptions } = require("mongoose");
connectDB()
 .then(()=>{
    console.log("connection established successfully");
     app.listen(7777,()=>{
     console.log("server successfully built on port 7777")
})
 })
 .catch((err)=>{
    console.error("Database cannot be connected");
 })

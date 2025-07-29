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

app.get("/getUserData",(req,res)=>{
     try{
         throw new Error("fdwfaf");
         res.status(500).send("userdata send")
    }catch(err){
        res.status(500).send("Something went wrong please contact customer support");
    }
    
})
app.use("/",(err,req,res,next)=>{
   if(err){
    res.status(500).send("something went wrong")
   }
})

app.listen(7777,()=>{
console.log("server successfully built on port 7777")
})
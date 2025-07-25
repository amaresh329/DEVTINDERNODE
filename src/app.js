// console.log("Hello world");

const express=require("express");
const app=express();


app.get("/user/:id/:name",(req,res)=>{
    console.log(req.params);
    let {id,name}=req.params
    res.send(`<h1>parameters passed successfully id=${id},name=${name}</h1>`)
})

//This will only handle GET call to /user
app.get("/user/:userid",(req,res)=>{
    // console.log(req.query);
    console.log(req.params);//if there are any additional parameters afetr the /user
    res.send({firstName:"Amaresh",lastName:"Vutukuri"})
})

// app.get("/user",(req,res)=>{
//     console.log(req.query);
   
//     let {q}=req.query;
//      if(!q){
//         res.send(`<h1>nothing searched</h1>`)
//     }
//     res.send(`<h1>these are the search results for the query:${q}</h1>`);
// })



app.get("/user",(req,res)=>{
    console.log(req.query);
    console.log(req.params);//if there are any additional parameters afetr the /user
    res.send({firstName:"Amaresh",lastName:"Vutukuri"})
})

// app.get(/\/ab(c)?d/,(req,res)=>{
//     res.send("here catch is optional while calling the path")
// })

app.post("/user",(req,res)=>{
    res.send("user data posted successfully")
})

app.delete("/user",(req,res)=>{
    res.send("user data deleted successfully")
})

//tis will match all the HTTP method API calls to /test
app.use("/test",(req,res)=>{
    res.send("app listening on test")
})

app.use("/hello/2",(req,res)=>{
   res.send("app listening on nested routes of hello")
})

app.use("/hello",(req,res)=>{
    res.send("app listening on hellopage")
})


app.use("/",(req,res)=>{
    res.send("app listening on port Home page")
})


app.listen(7777,()=>{
console.log("server successfully built on port 7777")
})
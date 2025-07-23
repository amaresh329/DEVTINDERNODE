// console.log("Hello world");

const express=require("express");
const app=express();



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
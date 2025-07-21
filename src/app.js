// console.log("Hello world");

const express=require("express");
const app=express();
app.use((req,res)=>{
    res.send("app listening on port 3000")
})
app.listen(3000,()=>{
console.log("server successfully built on port 3000")
})
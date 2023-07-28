const express=require('express');
const mongoose=require('mongoose');

const app=express();

//db connection
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"TODO",
})
.then(()=> console.log("Database Connected"))
.catch((e)=> console.log(e));


//middlewares

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//routes

app.use(require("./routes/index"));

app.use(require("./routes/todo"));


app.listen(3000,()=>{
    console.log("Server started on port 3000")
})
const express=require('express');
const router=express.Router();
const Todo=require("../models/Todo");


//routes

router.post("/add/todo",(req,res)=>{
    const {todo}=req.body;
    const newTodo=new Todo({todo})

    newTodo.save()
    .then((result) => {
        console.log("Successfully added")
        res.redirect("/")
        
    }).catch((err) => {
        console.log(err)
        
    })

})

.get("/delete/todo/:_id",(req,res)=>{
  const {_id}=req.params;
  Todo.deleteOne({_id})
  .then((result) => {
    console.log("Deleted Todo Successfully");
    res.redirect("/")

  })
  .catch((err) => {

    console.log(err)
  });  
})






module.exports=router;
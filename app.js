//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");




const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



// Mongoose connectivity command

const connect=async()=>{
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/TODOLISTDB");
    console.log("connect");
  }
  catch(err){
    console.log(error);
  }
}

connect();

const NameSchema=new mongoose.Schema({
  name:String
});
const name=mongoose.model("name",NameSchema);

//n2.save();
const n=new name(
{
  name:"Java"
});
const n1=new name(
  {
    name:"JavaScript"
  });
  const n2=new name(
    {
      name:"Ds & Algo"
    });

const def=[n,n1,n2];


const listSchema={
  name:String,
  items:[NameSchema]

};

const List=mongoose.model("List",listSchema);


//name.save();

//  ).then(function(err){
//   if(err){
//     console.log("success");
//   }else{
//     console.log(err);
//   }
//  });//,function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("success");
//   }
//   });





// Mongoose connectivity command

//const items = ["Buy Food", "Cook Food", "Eat Food"];
//const workItems = [];

app.get("/", function(req, res) {



   name.find({}).then(function(f,err){

    if(f.length===0){
       name.insertMany(def).then(function(err){
        if(err){
          console.log(err);

        }else{
          console.log("successfully excuted!");
        }
    res.redirect("/");
 

});

    }else{
    res.render("list", {listTitle: "Today's Item", newListItems: f});
    }
   });

  

});

app.get("/:customListName",function(req,res){
const n=req.params.customListName;


const list=new List({
  name:n,
  items:def

});
list.save();
//res.render("/"+n);
});




app.post("/", function(req, res){

  const itemname = req.body.newItem;

   const ItemName=new name({
    name:itemname
   });

   ItemName.save();
   res.redirect("/");



  // if (req.body.list === "Work") {
  //   workItems.push(item);
  //   res.redirect("/work");
  // } else {
  //   items.push(item);
  //   res.redirect("/");
  // }
});

app.post("/delete", function(req, res){

  const checId=req.body.checkbox;
  name.findByIdAndRemove(checId).then(function(err){
    if(err){
   console.log(err);
    }else{
      console.log("Successfully deleted");

    }
  })

 
   res.redirect("/");



  // if (req.body.list === "Work") {
  //   workItems.push(item);
  //   res.redirect("/work");
  // } else {
  //   items.push(item);
  //   res.redirect("/");
  // }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

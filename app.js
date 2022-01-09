const express=require("express");
const app=express();
const bodyParser=require("body-parser");


//routes
const apiRoutes=require("./routes/api-routes");

//port
const port = 1000 || env.PROCESS;

//json parsing
app.use(bodyParser.json());

//urlEncoded data parsing
app.use(express.urlencoded({extended:false}));

//using the routes
app.use("",apiRoutes);



app.get("/",(req,res,next)=>{
    res.json("server is running...");
})

app.listen(port,(err)=>{
    if(err){
        console.log("Something went wrong!");
    }
  console.log("listening on port no. : ",port);
});
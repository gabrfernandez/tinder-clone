const express=require('express');
const mongoose=require('mongoose');

//environment variables
require('dotenv').config();


//APP config
const app=express();
const port = process.env.PORT || 8001;

//Middlewares
const cors=require('cors')
app.use(cors());
app.use(express.json());

//DB config
const connection_url=process.env.ATLAS_URI;
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully")
})

//API Endpoints
// app.get("/",(req,res)=>res.status(200).send("Hello World!"));

// app.post('/tinder/card',(req,res)=>{
//     const dbCard=req.body;
// })

//require the files and use the files
const cardRouter=require('./routes/cards');
app.use('/cards',cardRouter)

//Listener
app.listen(port,()=>console.log(`listening on localhost:${port}`));
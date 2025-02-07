const dotEnv = require("dotenv")
const express = require("express")
const app = express();
const ConnectToDataBase = require('./connection');

dotEnv.config()
const Port = process.env.port;
console.log(Port)


app.get('/', (req,res)=>{
    res.send("Hello from the App")
})

app.listen(Port, ()=>{
    console.log(`App is running in Port ${Port}`)
})

//Connect to mongoDB
// ConnectToDataBase()
// .then(()=>{
//     console.log("Database is Connected")
// })


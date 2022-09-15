const express = require("express");

const app = express();

const conn = require("./db");

const abcd = require("./routes/vairs");

const cors = require("cors");

app.get("/", (req, res)=>{


res.send("This is from backend")

})




conn.connection.on("connected", (err)=>{

if(err){
console.error(err);

}

else{

    console.log("Connected to MongoDB");
}



})

app.use(express.json());
app.use(cors());
app.use("/vairs", abcd);




app.listen(7000, ()=>{

console.log("Node js Server has Started");


})


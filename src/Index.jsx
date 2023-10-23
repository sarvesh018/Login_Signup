const express = require("express")
const collection = require("./db")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/", cors(), (req, res) => {

})

app.post("/", async(req, res) =>{
    const{name, username, password} = req.body

    try{
        const check = await collection.findOne({username: username})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("fail")
    }
})

app.post("/signup",async(req,res)=>{
    const{name, username, password}=req.body

    const data={
        name: name,
        username:username,
        password:password
    }

    try{
        const check=await collection.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})

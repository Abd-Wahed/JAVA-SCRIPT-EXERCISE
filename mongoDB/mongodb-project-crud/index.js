let express = require("express")
const { dbConnection } = require("./dbConnection")
const { ObjectId } = require("mongodb")
let app = express()

app.use(express.json())

app.get("/student-read", async (req, res) => {
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");
    let data = await studentCollection.find().toArray();
    let resObj = {
        status: 1,
        msg: "Student list",
        data
    }

    res.send(resObj)
})

app.post("/student-insert", async (req, res) => {
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");

    // let obj ={
    //     sName:req.body.sName,
    //     sEmail:req.body.sEmail
    // }

    let { sName, sEmail } = req.body;
    let obj = { sName, sEmail }
    let insertRes = await studentCollection.insertOne(obj)
    // console.log(obj);
    let resObj = {
        status: 1,
        msg: "Data Insert",
        insertRes
    }

    res.send(resObj)
})

app.delete("/student-delete/:id?",async(req,res)=>{
    // let paramsData = req.params;
    // console.log(paramsData)
    let {id}=req.params;
    let myDB=await dbConnection();
    let studentCollection=myDB.collection("students")
    let delRes=await studentCollection.deleteOne({_id:new ObjectId(id)})

    res.send("Delete API")
})

app.listen("8000")
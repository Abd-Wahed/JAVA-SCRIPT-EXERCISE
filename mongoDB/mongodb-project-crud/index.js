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

    let checkEmail = await studentCollection.findOne({sEmail})
    // console.log(checkEmail)
    if(checkEmail){
        return res.send({
            status:1,
            msg:"Email Id already Exist"
        })
    }

    

    let insertRes = await studentCollection.insertOne(obj)
    // console.log(obj);
    let resObj = {
        status: 1,
        msg: "Data Insert",
        insertRes
    }
                                 
    res.send(resObj)
})

app.delete("/student-delete/:id",async(req,res)=>{
    // let paramsData = req.params;
    // console.log(paramsData)
    let {id}=req.params;
    let myDB=await dbConnection();
    let studentCollection=myDB.collection("students")
    let delRes=await studentCollection.deleteOne({_id:new ObjectId(id)})

    let resObj={
        status:1,
        msg:"Data Delete",
        delRes
    }
    res.send(resObj)
})



// update 
app.put("/student-update/:id",async(req,res)=>{
    let {id}=req.params; //where
    let {sName,sEmail}=req.body;

    let obj={};

    if(sName !=="" && sName!==undefined && sName!==null){
        obj['sName']=sName
    }
     if(sEmail !=="" && sEmail!==undefined && sEmail!==null){
        obj['sEmail']=sEmail
    }


    let myDB=await dbConnection();
    let studentCollection=myDB.collection("students")
    let updatesRes = await studentCollection.updateOne({_id:new ObjectId(id)},{$set:{sName,sEmail}})
        let resObj={
        status:1,
        msg:"Data Update",
        delRes
    }
    res.send(resObj)
})
app.listen("8000")
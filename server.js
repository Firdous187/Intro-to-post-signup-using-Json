const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:[true,"First Name is Required"],
        minlength:2,
        maxlength:20,
        RegExp:[/^[a-zA-Z]+$/, 'First name must only contain letters']
      },
      lastName: {
        type:String,
        required:[true,"last Name is Required"],
        minlength:2,
        maxlength:20,
        RegExp:[/^[a-zA-Z]+$/,'last name must only contain letters']
      },
      age: {
        type:Number,
        RegExp:[/^[1-9][0-9]?[0-9]?$/ ,"Age must be enter in numbers"]
      },
      email:{
        type:String,
        required:[true,"email is required"],
        RegExp:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "email is required"],
      },
      password:{
        type:String,
        required:[true,"password is required"],
        RegExp:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "password is required"],
      },
      mobileNumber:{
       type: String,
       require:[true,"Mobile No is require"],
       RegExp:[/^[6-9]\d{9}$/,"Mobile No is require"],
      },
      profilePic:{
      type:String,
      }

});

let user = new mongoose.model("user", userSchema);


app.post("/signup", async (req,res) =>{
    console.log(req.body);

    //res.json(["signup dummy response"]);
    try{
        let newUser = new user({
            firstName:req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            password:req.body.password,
            profilePic:req.body.profilePic,
    
        });
    
        await User.insertMany([newUser]);
        res.json({
            status:"success",
            msg:"user created successfully",
        });
    
   
    }catch(err){
        res.json({
            status:"failed",
            msg:"unable to create the data",
        });
    }
});

    

app.listen(6789,() =>{
    console.log("Listening to port 6789");
})

let connectToMDB = async () => {

    try {
        mongoose.connect("mongodb+srv://shaikfirdousunnisabegum882:begum882@createdatabase.n1bl7.mongodb.net/Employees?retryWrites=true&w=majority&appName=createDatabase");
        console.log("Successfully connected to MDB");
        //getEmployeesFromDB();
    } catch (err) {
        console.log(err)
        console.log("Unable to connect to MDB");
    }

};

connectToMDB();
const express = require("express");
const app = express();
const mongoose =require("mongoose");
// const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const dotenv =require("dotenv");
const path = require("path");
dotenv.config();




mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:true }).then(console.log("connected to mongoDB")).catch((err) =>console.log(err));

const storage = multer.diskStorage({
    destination :(req,file,cb) =>{
        cb(null,"images")
    } ,filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
})

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
})


app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")))
// const allowedOrigins = ["http://localhost:3000"];
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         var msg =
//           "The CORS policy for this site does not " +
//           "allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//   })
// );

app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/post",postRoute);
app.use("/api/categories",categoryRoute);

app.listen(5000,()=>{

 console.log("Backened is runnning");


});
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
    origin:"*"
}));

const user={
    "slackUsername":"OLUKINNI",
    "backend":true,
    "age":"24",
    "bio":"Ambitious, Smart, Hardworking, Optimistic, Mentally, Socially, and Emotionally Capable, always ready to learn. I'm a passionate Software Development, trying to change and add to my community through the tech world."
};

const port= process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send("Zuri First Task");
});

app.get('/user',(req,res)=>{
res.send(user);
});


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
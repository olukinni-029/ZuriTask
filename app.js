require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
const Sample = require("./model/sample");


const app = express();

app.use(express.json());
app.use(cors({
    origin:"*"
}));

connectDB();

const user={
    "slackUsername":"OLU",
    "backend":true,
    "age":24,
    "bio":"Ambitious, Smart, Hardworking, Optimistic, Mentally, Socially, and Emotionally Capable, always ready to learn. I'm a passionate Software Development, trying to change and add to my community through the tech world."
};


const port= process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send("Zuri First Task");
});

app.get('/user',(req,res)=>{
res.send(user);
});


app.post('/calculator', async (req, res) => {
    try {
      let { x, y, operation_type,slackUsername } = req.body;
      // use a switch operator to write a function that can add, multiply, subtract, or divide two numbers
      const calculator = (x, y, operation_type) => {
        switch (operation_type) {
          case 'addition':
            return x + y;
          case 'subtraction':
            return x - y;
          case 'multiplication':
            return x * y;
          case 'divide':
            return x / y;
          default:
            return 'Invalid operator';
        }
      };
      // use the function to calculate the result of 3 + 4
      const result = calculator(x, y, operation_type,slackUsername);
    const sample = await Sample.create({
        slackUsername,
        result,
        operation_type
    })
      // send the result back to the client
      return res.status(200).json({ message:"Sample Response Format",sample });
    } catch (error) {
      console.log(error);
    }
  });

    

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
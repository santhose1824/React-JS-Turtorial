const express = require('express');
const userRouter = require("./routes/usersRoute");
const postRouter = require("./routes/postRouter");
const app = express();

app.use(express.json());

const PORT = 3000;


app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to the Express App"
    });
});

//  User Router

app.use('/users',userRouter);
app.use('/posts',postRouter);




app.listen(PORT, () => {
    console.log(`Server is running in the port : http://localhost:${PORT}`);
});
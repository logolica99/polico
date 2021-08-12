require('dotenv').config();


const express = require('express');
const app = express();

//connecting to database
const connectDB = require('./db/connect');

//importing routers
const userRouter = require('./routes/users');
const productsRouter = require('./routes/products');

//parsing json
app.use(express.json());


//routing
app.use('/user',userRouter);
app.use('/products',productsRouter);



//starting server
const port =process.env.PORT || 3000;

const start = async() =>{
    try{
        //connect to database
        await connectDB(process.env.DB_URL)
        app.listen(port, ()=>console.log(`Server is listening at port ${port}`))
    }catch(error){
        console.log(error)
    }
}


start();
import express from 'express' ;
import mongoose from 'mongoose' ;
import dotenv from 'dotenv' ;
import userRoutes from './routes/user.route.js' // Add .js in the end
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to Database');
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.listen(3000, ()=>{
    console.log('server listening to port number 3000.')
})

app.use("/api/user", userRoutes);
import express from 'express' ;
import mongoose from 'mongoose' ;
import dotenv from 'dotenv' ;
import userRoutes from './routes/user.route.js' // Add .js in the end
import authRoutes from './routes/auth.route.js' // Add .js in the end
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to Database');
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.use(express.json()); // used for sending json data through http requests

app.listen(3000, ()=>{
    console.log('server listening to port number 3000.')
})

//Adding api routes khudse banaya hai yeh /api/user aur /api/auth
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500; //if no status code then send 500 internal server error
    const message = err.message || 'internal server error';
    return res.status( statusCode).json({
        success: false,
        message,// error : message,
        statusCode,// statusCode: statusCode,

    })
})
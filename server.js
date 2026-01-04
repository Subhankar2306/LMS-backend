import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express';
import {connectDB} from './config/db.js'; 

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(clerkMiddleware());

// DB
connectDB();

// ROUTES


// APP PORT AND LISTENING

app.get('/', (req, res) =>{
  res.send('API is running...');
});


app.listen(port, () =>{
  console.log(`Server is running on port ${port}`);
})
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
// mongoose.connect()

app.listen(3001, () => console.log('Server is running on port 3001'));

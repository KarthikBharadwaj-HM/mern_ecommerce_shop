import express, { json } from 'express';
const app = express();
import { config } from 'dotenv';
import mongoose from 'mongoose';

//app
import connectToDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

config();
connectToDB();

const port = process.env.PORT || 5000;

app.use('/api/products', productRoutes);
app.use(json());

app.get('/', (req, res) => {
  res.status(200).send('Api is running...');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

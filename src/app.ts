import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tarot-shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use('/api/products', productRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Tarot Shop API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

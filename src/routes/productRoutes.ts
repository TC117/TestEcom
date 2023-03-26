import express, { Request, Response } from 'express';
import Product from '../models/Product';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  const { name, image, description, price, stock } = req.body;

  try {
    const newProduct = new Product({ name, image, description, price, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });
  }
});

export default router;

import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';

//app
import Product from '../models/productModel.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      const product = await Product.findById(req.params.id).exec();
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found !!' });
      }
    } else {
      res.status(500).json({ error: 'Invalid product id !!' });
    }
  })
);

export default router;

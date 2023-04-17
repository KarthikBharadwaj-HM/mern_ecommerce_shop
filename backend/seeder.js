import { config } from 'dotenv';

//app
import users from './data/users.js';
import User from './models/userModel.js';
import products from './data/products.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectToDB from './config/db.js';

config();
connectToDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const admin = createdUsers[0]._id;

    const sampleProducts = products.map((item) => ({ ...item, user: admin }));
    await Product.insertMany(sampleProducts);

    console.log('Data Imported!');
  } catch (e) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (e) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

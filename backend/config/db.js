import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (mongoose.connection.readyState === 1) {
      console.log('connected DB');
    } else {
      console.log(`Connecting to db has failed`);
    }
  } catch (e) {
    console.log(`Connecting to db has failed ${e.message}`);
  }
};

export default connectToDB;

import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const db = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sdam')
  .then(res => {
    if (res) {
      console.log(`Database connected successfully to ${process.env.MONGODB_URI}`);
    }
  })
  .catch(err => {
    console.log(err);
  });

export default db;
require('dotenv').config();
import mongoose from 'mongoose';

const uri = process.env.ATLAS_URI || "";

const connectToDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    throw error;
  }
}

export { connectToDB };
import mongoose from 'mongoose';
import dotenv from 'dotenv';

export default async function conectarBanco(key) {
    try {
        await mongoose.connect(key);
    } catch (error) {
        console.log('ERRO: Não foi possível se conectar ao MongoDB');
        console.log(error);
    }
}

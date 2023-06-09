import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

if (!process.env.MONGO_URL) {
	console.error('Missing db connection');
	process.exit(1);
}

mongoose.connect(process.env.MONGO_URL).then(() => {
	console.log('Connected to database');
}).catch(err => {
	console.error(err);
});

app.listen(PORT, () => console.log(`app is listening port ${PORT}`));

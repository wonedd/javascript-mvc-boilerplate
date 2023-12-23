import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import routes from './routes.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
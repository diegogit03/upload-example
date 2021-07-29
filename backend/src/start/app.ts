import path     from 'path';
import * as dotenv   from 'dotenv'
import express  from 'express';
import mongoose from 'mongoose';

import routes   from './routes';

dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') })

mongoose.connect(process.env.MONGO_URI ?? '', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

export default app;

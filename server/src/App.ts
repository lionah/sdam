import db from './Database';
import express from 'express';
import { assetRoutes } from './routes/AssetRoutes';

const app = express();

app.use(express.json());

const api = express.Router();

api.use('/assets', assetRoutes);

app.use('/api/v1', api);

db.then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});
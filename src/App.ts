import db from 'Database.js';
import express from 'express';
import { assetRoutes } from 'routes/AssetRoutes';

const app = express();

app.use(express.json());

app.use('/assets', assetRoutes);

db.then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});
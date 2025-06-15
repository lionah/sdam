import db from './Database';
import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello World'));

db.then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});
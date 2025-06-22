import db from 'Database.js';
import express, {Application, Request, Response} from 'express';

const app: Application = express();

app.get('/', ( req: Request, res: Response) => {res.send('Hello World')});

db.then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});
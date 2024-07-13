import express, { Request, Response } from 'express';

const app = express();
const port = process.env.BASE_URL;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
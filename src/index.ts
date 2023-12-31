import express, { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes'

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

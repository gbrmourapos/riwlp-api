import express, { Request, Response, NextFunction } from "express";
import { contactRoute } from "./routes";
import dbInit from "./context/dbinit";
import cors from "cors";

const app = express();
const port = 5000;

dbInit();

app.use(express.json());
app.use(cors())

app.use('/contact', contactRoute)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
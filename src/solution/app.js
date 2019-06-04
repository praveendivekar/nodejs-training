// Simple express server with PORT
import express from 'express';
import { logger, addTime } from './middlewares/application-middleware';
import { customRouter } from './middlewares/router-middleware';
import { errorHandler } from './middlewares/error-middleware';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use('/api/custom', customRouter);
app.get('/api/admin', errorHandler);

// Pass the middlwares as an array
app.use('/api/application', [bodyParser, logger, addTime], (req, res) => {
  res.send({messge: 'Hello!'});
});

// Listen the application with specified port
app.listen(PORT, () => {
  console.log(`Server is at ${PORT}`);
});

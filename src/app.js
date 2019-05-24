// Simple express server with PORT
import express from 'express';
import logger from './middlewares/application-middleware';
import appRouter from './routes/router';

const app = express();
const PORT = 3000;

app.use(logger);

app.use('/', appRouter);

// Listen the application with specified port
app.listen(PORT, () => {
  console.log(`Server is at ${PORT}`);
});

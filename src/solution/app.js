// TODO:- Write a simple logger middlware and hook into the app js
import express from 'express';
import logger from './middlewares/logger';

const app = express();
const PORT = 3000;

// pp.use(logger);

app.get('/',[logger] ,(req, res) => {
  res.send({message: 'Hello! from app'});
})

// Listen the application with specified port
app.listen(PORT, () => {
  console.log(`Server is at ${PORT}`);
});

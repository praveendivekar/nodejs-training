import express from 'express';

const customRouter = express.Router();

const Controller = (req, res, next) => {
  console.log(`Request ${req.originalUrl}`);
  res.send({ message: 'Hello from router!' });
  next();
}

customRouter
  .get('/', Controller)
  .post('/', Controller)
  .delete('/:id', Controller)

export default customRouter;


// simple router file 
import express from 'express';

var appRouter = express.Router();

appRouter.get('/:id', (req, res, next) => {
  res.send({message: 'Hello!'})
});

export default appRouter;
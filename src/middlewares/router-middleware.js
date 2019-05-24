import express from 'express';

const itemRouter = express.Router();

const controller = (req, res, next) => {
  res.send({message: `Hello! ${req.originalUrl}`});
}

itemRouter
.get('/', controller)
.post('/', controller)
.delete('/:id', controller)


export {
  itemRouter
};

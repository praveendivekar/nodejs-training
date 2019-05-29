// simple error handling middleware
import express from 'express';

const errorHandler = express.Router();

errorHandler.use((req, res) => {
  if (!req.headers['x-auth']) {
    res.sendStatus(401).send('Not Authorized!');
  };
});

export {
  errorHandler
};

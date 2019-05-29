const logger = (req, res, next) => {
  console.log('In app logger');
  next();
}

export default logger;
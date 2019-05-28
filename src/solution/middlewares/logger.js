// simple application level middlware for logging
const logger = (req, res, next) => {
  console.log(`In application logger`);
  next();
}

export default logger;

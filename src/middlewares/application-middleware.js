// simple application level middlware for logging
const logger = (req, res, next) => {
  console.log(`In application logger ${req.time}`);
  next();
}

const addTime = (req, res, next) => {
  req.time = new Date(Date.now());
  next();
}

export {
  logger,
  addTime
};

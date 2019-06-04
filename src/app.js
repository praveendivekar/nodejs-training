// TODO:- implement routing and error and custom middlware in the flow
import express from 'express';

const app = express();
const PORT = 3000;

// TODO - implement a router level middleware for the request api/custom

// TODO - implement a router level middleware for api/admin and throw error for restricted access

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});

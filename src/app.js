// TODO:- create simple route and hook up simple middlware logger in flow
import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});

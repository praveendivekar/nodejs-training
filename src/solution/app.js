// Simple express server with PORT
import express from 'express';

const app = express();
const PORT = 3000;

// Listen the application with specified port
app.listen(PORT, () => {
  console.log(`Server is at ${PORT}`);
});

const express = require('express');
const path = require('path');
const userRoutes = require('../routes/userRoutes');
const connectDB = require('../db/connect');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));


const PORT = 3000;
const DB_URI = 'mongodb+srv://andy:Cohort63VAAD@cluster0.j5id58o.mongodb.net/?retryWrites=true&w=majority';

connectDB(DB_URI);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Routes for user-related operations
app.use('/', userRoutes);

// Serve static files from the React application
app.use(express.static(path.resolve(__dirname, '../build')));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});


app.use((err, req, res, next) => {
  let errorObj;
  if (typeof err === 'object') {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    errorObj = Object.assign({}, defaultErr, err);
  } else {
    errorObj = {
      log: 'Express error handler caught non-object error',
      status: 500,
      message: { err: err },
    };
  }
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}...`);
});

module.exports = app;
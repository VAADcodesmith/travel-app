const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser'); //if we add cookies 

//will need MongoURI 

//will need mongoose connect function

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//static files
app.use('/build', express.static(path.join(__dirname, '../build')));

//not sure if we want to separate out server vs. router file so I will
//leave this here for potential future use:
// app.use('/', apiRouter);

//this will route any get requests back to front-end so we can use react-router
//going to wait until we rearrange their files before committing to a file path
app.get('*', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//catch all error handler
app.use((req,res) => res.status(404).send('This page does not exist'));

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: `Express error handler caught unknown middleware error: ${err}`,
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
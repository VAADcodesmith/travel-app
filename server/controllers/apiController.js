// relevant imports here
const axios = require("axios")

const apiController = {};

apiController.getStateData = async (req, res, next) => {
  const stateName = req.stateName;
  console.log('apiController is running', stateName)
  // console.log(req)


  const options = {
    method: 'GET',
    url: 'https://us-states.p.rapidapi.com/basic',
    headers: {
      'X-RapidAPI-Key': '58aefa7124msh53bbdd486891b64p12abe8jsnf6db4dff99c6',
      'X-RapidAPI-Host': 'us-states.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    // console.log(response.data);
    res.locals.response = response.data
  } catch (error) {
    console.error(error);
  }
  return next();
}

module.exports = apiController;
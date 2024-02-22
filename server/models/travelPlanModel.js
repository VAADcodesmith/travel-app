const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//used to compare homecity to destination. could be used for flight info, travel time, etc. based on API used 

const travelPlanSchema = new Schema({
    destination: {type: String, required: true},

    // homecity: {type: String, required: true}
})


//for user roles, add access level ex--> access:{ level: 5, group; "paid"}

module.exports = mongoose.model('TravelPlan', travelPlanSchema); 
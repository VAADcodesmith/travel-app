const Session = require ('../models/sessionModel'); //double check pathing

const sessionController = {};

// checks DB to determine whether user's session is still valid 
//if yes, they can open up map
//if not, they will be redirected to signup

sessionController.isLoggedIn = async (req, res, next) => {
  // Check if user is logged in based on ??? need to ask Matt

  const userId = req.session.userId;

  try {
    // If userId is not set in the session, the user is not logged in
    if (!userId) {
      return res.redirect('/signup');
    }

    //do we check for user or do we check for session? 
    //how are we tying users back with their respective sessions?
    const user = await User.findById(userId);


    return next();

  } catch (err) {
    return next({
      log: `Error in sessionController.isLoggedIn: ${err}`,
      message: { err: 'An error occurred' },
    });
  }
};



module.exports = sessionController;
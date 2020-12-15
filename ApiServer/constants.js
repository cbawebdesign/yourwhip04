const dotenv = require('dotenv');

const CONFIG = dotenv.config().parsed;

// CHANGE FOR YOUR COMPANY AND APP INFORMATION SETTING
// USED IN EMAILS SENT BY APP
exports.COMPANY_INFO = {
  app_name: 'Share App',
  company_name: 'Share',
  app_emailaddress: 'info@knowlephant.com',
  address: 'Company address',
};

// CHANGE POST AUTO-DELETE SETTINGS
// IF 'TRUE', POSTS WILL EXPIRE AFTER 24 HOURS
// EXPIRY TIME CAN BE MODIFIED FROM BACKEND ONLY
exports.ENABLE_POST_SELF_DESTRUCT = true;

// DISPLAY SUGGESTIONS CONTROL SWITCH TO USER SETTINGS
// SWITCH LETS USER CONTROL SEEING SUGGESTED PEOPLE & POSTS BASED
// ON THEIR SELECTED INTERESTS
exports.ENABLE_CONTROL_SUGGESTIONS = true;

// DISPLAY SUGGESTED PEOPLE & POSTS BASED ON USER'S SELECTED INTERESTS GLOBAL SETTING
// ONLY ACTIVE IF ABOVE SET TO FALSE
exports.ENABLE_SUGGESTIONS = true;

exports.MONGODB = {
  connectionString:
    'mongodb+srv://cbaweb:ArKR01RKDgYH7OX0@cluster0.ympoa.mongodb.net/share_development?retryWrites=true&w=majority',
};

exports.SENDGRID = {
  api_key: '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',
};

exports.CLOUDINARY = {
  cloud_name: 'dv6uqvf4s',
  api_key: '723761625552252',
  api_secret: '8CGzcAd12co-ul3cdPq4MuwVvNo',
  MEDIA_FOLDER:
    'VIDEO',
};

exports.JWT_KEY = 'A7F52A31CC913A496C2E63C3FB2002CCC5523CF10D3B14AF3C44D1289768D08E';

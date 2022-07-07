const express = require('express');
const POST = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');

// var logger = require('morgan');
   // * Router >>>> user <<<<
let register = require('./router/register');
let login = require('./router/login');
let login_email = require('./router/login_email');
let resetpass = require('./router/resetpass');
let otp = require('./router/otp');
let user = require('./router/user');
let profile = require('./router/profile');
let checkIn = require('./router/checkin');
let checkOut = require('./router/checkout');
   // * Router >>>> Admin <<<<
let admin = require('./router/admin');
   // * Router >>>> Supper Admin <<<<
let SupperAdmin = require('./router/supper_admin');
   // * app
let app = express();
   // * use/set
app.set('view engine', 'ejs'); // ejs
app.use(express.json());
app.use(cookieParser());

   // * router >>>> User <<<<
app.use('/register',register);
app.use('/login',login);
app.use('/loginemail',login_email); 
app.use('/resetpassword',resetpass);
app.use('/otp',otp);
app.use('/user',user);
app.use('/profile', profile);
app.use('/checkIn',checkIn);
app.use('/checkOut',checkOut);
   // * router >>>> Admin <<<<
app.use('/admin',admin);
   // * router >>>> Supper Admin <<<<
app.use('./supperadmin',SupperAdmin);
// ////////////////////////////////////////
app.listen(POST, () => {
    console.log(`Server running on port ${POST}`)
})
module.exports = app;

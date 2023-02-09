const express = require('express');
const POST = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const cors = require('cors');
   /* --- API --- */
const barRouter = require('./router/bar');

   /* --- App --- */
const app = express();
   /* --- Cors --- */
const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200
}
app.use(cors(corsOptions));
   /* --- use/set --- */
app.set('view engine', 'ejs'); // ejs
app.use(express.json());
app.use(cookieParser());
   /* --- router --- */
app.use('/api',barRouter);
   /* --- Post --- */
app.listen(POST, () => {
    console.log(`Server running on port ${POST}`)
})
module.exports = app;

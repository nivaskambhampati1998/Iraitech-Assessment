const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

      //import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

           //App
const app = express();

         // Database
mongoose.connect('mongodb://127.0.0.1:27017/Iraitech-Assessment',{
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
}).then(() => console.log('Database is Connected'));

    
            //middlewares
app.use(bodyParser.json());
app.use(cors());

               //routes middleware

app.use('/api', authRoutes);

const port = process.env.PORT || 8000;
const hostname = process.env.HOSTNAME 

app.listen(port, () => {
  console.log(`Server is running on http://${hostname}:${port}`)
});

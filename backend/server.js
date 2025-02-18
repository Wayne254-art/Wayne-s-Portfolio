
const express = require('express')
const cors = require('cors')
const sequelize =require('./db/database')
const UserRoutes = require('./routes/auth.routes')
// const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

const corsOptions = {
    origin: ['http://localhost:3000'], 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',                
    allowedHeaders: ['Content-Type', 'Authorization'],         
    credentials: true                                          
  }

  app.use(cors(corsOptions))
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))

//   Routes
app.use('/api', UserRoutes)

  sequelize.sync()
  .then(() => {
    console.log('Models synchronized with the database.');
  })
  .catch((err) => {
    console.error('Error syncing models:', err);
  });


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  
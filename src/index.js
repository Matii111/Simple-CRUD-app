require ('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const app = express()
const port = process.env.PORT;
const uri = process.env.MONGO_URI;



//middlewares
app.use(express.json());
app.use('/api', userRoutes);



//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Conection to DB established'))
    .catch((err) => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
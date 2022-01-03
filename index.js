/*
 * required external modules
 */
const express = require('express');
const bodyParser = require('body-parser');
//Import the mongoose module
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');
const areaRouter = require('./routes/areaRoute');
const cityRouter = require('./routes/cityRoute');
const neighboordRouter = require('./routes/neighboordRoute');
const reviewRouter = require('./routes/reviewRoute');



/*
 * connect to db
 */
//Set up default mongoose connection
mongoose.connect('mongodb://localhost:27017/bestplaces', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(console.log("connect to db BestPlaces!!"))

/*
 * app variables
 */
const app = express();
const port = 3000;

/*
 * app configuration
 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/users',userRouter);
app.use('/api/areas',areaRouter);
app.use('/api/cities',cityRouter);
app.use('/api/neighboords',neighboordRouter);
app.use('/api/reviews',reviewRouter);

/*
 * routes definitions
 */
app.get("/", (req, res) => {
    res.status(200).send("welcome");
  });

/*
 * Server Activation
 */
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });  


module.exports = app;

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

// log requests
app.use(morgan('tiny'));

// parse requests
app.use(bodyParser.urlencoded({extended: true}));

//set view engine
app.set("view engine", "ejs");

// load assest
app.use(express.static("assets"));

// load routers
const useContorller = require("./server/routes/router");
app.use("/", useContorller)

app.listen(PORT, function(){
    console.log(`Server is running on http://localhost:${PORT}`)
});
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require("./controllers/burger_controller");


const app = express(); 
app.use(routes);
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`)); 

// Database
// const db = require('./config/connection');
// // TEST DB
// db.authenticate()
// .then(()=>console.log('Database connected...'))
// .catch(err => console.log('Error'+err))

// handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));

// set static folder
app.use(express.static(path.join(__dirname, 'public'))) 

// Index route
app.get('/',(req,res) => res.render('index', {layout: 'main'}));

// Gig routes
app.use('/burgers', require('./controllers/burger_controller')); 


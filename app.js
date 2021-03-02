const path = require('path');
const express = require('express')
const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');



const app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', newRouter);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
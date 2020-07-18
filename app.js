const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH' ],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));


// Import Routes
const usersRouter = require(`./routes/users`);
const productsRouter = require(`./routes/products`);
const authRouter = require(`./routes/auth`);
const ordersRouter = require(`./routes/orders`);



//use Routes
app.use(`/api/users`, usersRouter);
app.use(`/api/products`, productsRouter);
app.use(`/api/auth`, authRouter);
app.use(`/api/orders`, ordersRouter);

module.exports = app;

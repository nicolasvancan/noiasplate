const express = require('express');
const morganLogger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const { service } = require('./configuration/config.json');
const routes = require('./routes');

const app = express();

const mongodb = require('./databases/mongodb');
const mongodbConnectionString = mongodb.connect();

// set port number to run the app
app.set('port', service.port);

app.use(helmet());
app.use(cors());
app.use(morganLogger('dev'));
app.use(express.json());

//Routes
app.use(routes);

app.listen(service.port, () => {
    console.log('Node server is up and running');
    console.log(`Mongo connection: ${mongodbConnectionString}`);
    console.log(`Prefix URL: ${service.prefix}`)
});

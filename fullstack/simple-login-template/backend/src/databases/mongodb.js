const { response } = require('express');
const mongoose = require('mongoose');
const configuration = require('../configuration/config.json');

const mongodb = {
    connect: () => {
        mongoose.Promise = global.Promise; // Tell mongoose to use global promise as promise context

        // Connection String
        const connectionString =
            `mongodb://${configuration.mongodb.username}:${configuration.mongodb.password}@${configuration.mongodb.host}:${configuration.mongodb.port}/${configuration.mongodb.database}`;

        console.log(connectionString)

        mongoose.connect(connectionString,
            {
                useNewUrlParser: true
            }).then((onfulfuill) => {
                console.log(onfulfuill);
            }).catch(onRejected => {
                console.log(onRejected);
            });

        const db = mongoose.connection;

        db.on('error', (event) => {
            console.error('Mongoose error');
            console.error(event);
        });

        db.once('open', () => {
            console.log("Connected to MongoDB");
        })
    }
}

module.exports = mongodb
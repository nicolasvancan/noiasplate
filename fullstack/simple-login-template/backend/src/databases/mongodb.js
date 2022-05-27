const { response } = require('express');
const mongoose = require('mongoose');
const configuration = require('../configuration/config.json');

const mongodb = {
    connect: () => {
        mongoose.Promise = global.Promise; // Tell mongoose to use global promise as promise context

        // Connection String
        const connectionString =
            `mongodb://${configuration.mongodb.username}:${configuration.mongodb.password}@${configuration.mongodb.host}:${configuration.mongodb.port}/${configuration.mongodb.database}`;
        let responseString;
        mongoose.connect(connectionString).then(onfulfilled => {
            responseString = onfulfilled;
        }).catch(onRejected => {
            responseString = onRejected;
        });

        return connectionString;
    }
}

module.exports = mongodb
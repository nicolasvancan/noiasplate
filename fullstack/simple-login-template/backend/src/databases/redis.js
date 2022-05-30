const redisServer = require('redis');
const { redis } = require('../configuration/config.json');
const bluebird = require('bluebird');

bluebird.promisifyAll(redisServer);

const redisClient = redisServer.createClient(
    redis.port,
    redis.hostname,
);

module.exports = redisClient;
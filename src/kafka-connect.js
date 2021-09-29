const { Kafka } = require('kafkajs')
const constants = require('./constant');

const kafka = new Kafka({
    clientId: constants.CLIENT,
    brokers: constants.BROKERS
})

exports.kafka = kafka;
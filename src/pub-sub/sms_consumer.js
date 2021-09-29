const constants = require('../constant');
const { kafka } = require("../kafka-connect")
const { run } = require('../kafka-consumer')

const consumer = kafka.consumer({ groupId: constants.GROUPS.SMS })
const consumerOptions = { 
    topic: constants.TOPICS.PUB_SUB, 
    fromBeginning: true 
}

const callback = (topic, partition, message) => {
    console.log("SMS Gönderildi, Mesaj:", message.value.toString())
}

run(consumer, consumerOptions, callback).catch(console.error)
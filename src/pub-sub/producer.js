const { kafka } = require("../kafka-connect")
const constants = require('../constant');

const producer = kafka.producer()

const run = async () => {

  // Producing
  await producer.connect()
  await producer.send({
    topic: constants.TOPICS.PUB_SUB,
    messages: [
        { 
            value: 'Hello Kafka, Sample Text',
            partition: 0
        }
    ]
  })

  producer.disconnect();
}

run().catch(console.error)
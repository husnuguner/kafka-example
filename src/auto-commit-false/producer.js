const { Kafka } = require('kafkajs')
const constants = require('../constant');

const kafka = new Kafka({
  clientId: constants.CLIENT,
  brokers: constants.BROKERS
})


const producer = kafka.producer()

const run = async () => {

  const messages = new Array(10).fill().map((i, e) => {
    return {
      value: 'Message ' + e,
      partition: 0
    }
  });

  // Producing
  await producer.connect()
  await producer.send({
    topic: constants.TOPICS.AUTO_COMMIT_FALSE,
    acks: 1,
    messages
  })

  producer.disconnect();
}

run().catch(console.error)
const { kafka } = require("../kafka-connect")
const constants = require('../constant');

const consumer = kafka.consumer({ groupId: constants.GROUPS.TEST })

const run = async () => {
    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: constants.TOPICS.SINGLE_PARTITION, fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            /*
            console.log({
                topic,
                partition,
                offset: message.offset,
                value: message.value.toString()
            })
            */
           console.log(message.value.toString())
        },
    })

}

run().catch(console.error)





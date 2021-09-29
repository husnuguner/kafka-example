const { kafka } = require("../kafka-connect")
const constants = require('../constant');

const consumer = kafka.consumer({ groupId: constants.GROUPS.TEST })
//const consumer = kafka.consumer()

const run = async () => {

    const commit = async (commitMessage) => {
        await consumer.commitOffsets(commitMessage);
    }

    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: constants.TOPICS.AUTO_COMMIT_FALSE, fromBeginning: true, partition: 0 })

    await consumer.run({
        autoCommit: false,
        eachMessage: async ({ topic, partition, message }) => {
           console.log(message.value.toString())
           //Commit methodunu kapatarak Consumer' un çalışma şeklini inceleyin.
           commit([{ topic, partition, offset: (Number(message.offset) + 1).toString() }])
        }
    })


}

run().catch(console.error)





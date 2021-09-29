const run = async (vConsumer, options, callback) => {
    // Consuming
    await vConsumer.connect()
    await vConsumer.subscribe(options)

    await vConsumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            if(callback != null){
                callback(topic, partition, message)
            }
        }
    })
}

exports.run = run;

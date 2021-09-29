const constants = {
    CLIENT: 'example-app',
    BROKERS: ['localhost:9092'],
    //TOPICS
    TOPICS: {
        SINGLE_PARTITION: 'SinglePartitionTopic',
        PUB_SUB: 'PubSubTopic',
        AUTO_COMMIT_FALSE: 'AutoCommitFalseTopic'
    },
    GROUPS: {
        TEST: 'test-group-id',
        EMAIL: 'email-group',
        SMS: 'sms-group',
        PUSH: 'push-group'
    }
};

module.exports = Object.freeze(constants);


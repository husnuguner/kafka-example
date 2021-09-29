const { kafka } = require("./kafka-connect")

/**
 * Kafka Consol ile TOPIC İşlemelri
 * 
 * TOPIC Create 
 * kafka-topics --create --zookeeper kafka-zookeeper:2181 --replication-factor 1 --partition 1 --topic "SampleTopic" --config cleanup.policy="compact"
 * --zookeeper : Kafa ile iletişimde olan Zookeeper adres bilgisi
 * --replication-factor : Cluster kurulumlarda TOPIC' in kaç tane replication' da tutulacağı bilgisi
 * --topic : TOPIC isim bilgisi 
 * --config : TOPIC için configuration bilgisi, Örnek: cleanup.policy="compact"
 * 
 * TOPIC List (Kafka üzerindeki tüm TOPIC' leri listeler)
 * kafka-topics --list --zookeeper kafka-zookeeper:2181
 * --zookeeper : Kafa ile iletişimde olan Zookeeper adres bilgisi
 * 
 * 
 * TOPIC DESCRIBE (TOPIC hakkında ayrıntılı bilgi verir)
 * kafka-topics --describe --zookeeper kafka-zookeeper:2181 --topic MultiPartitionTopic
 * --zookeeper : Kafa ile iletişimde olan Zookeeper adres bilgisi
 * --topic : TOPIC ismi
 * 
 * Topic: MultiPartitionTopic      PartitionCount: 3       ReplicationFactor: 1    Configs:
        Topic: MultiPartitionTopic      Partition: 0    Leader: 1       Replicas: 1     Isr: 1
        Topic: MultiPartitionTopic      Partition: 1    Leader: 1       Replicas: 1     Isr: 1
        Topic: MultiPartitionTopic      Partition: 2    Leader: 1       Replicas: 1     Isr: 1
 * 
 */

const run = async () => {
    try {
        // Install
        const admin = kafka.admin();

        await admin.connect(); // Connect Kafka Admin
        
        await admin.createTopics({
            topics: [
                {
                    topic: "SinglePartitionTopic",
                    replicationFactor: 1,
                    numPartitions: 1
                },
                {
                    topic: "MultiPartitionTopic",
                    numPartitions: 3, // Multi Partition Examle
                    replicationFactor: 1
                },
                {
                    topic: "PubSubTopic",
                    replicationFactor: 1,
                    numPartitions: 1
                },
                {
                    topic: "AutoCommitFalseTopic",
                    replicationFactor: 1,
                    numPartitions: 1
                }
            ]
        })

        await admin.disconnect();

      } catch (error) {
        console.log(error);
      } finally {
        process.exit(0);
      }
}


run().catch(console.log)
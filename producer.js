const { Kafka } = require('kafkajs')

const brokers= ['b-1.awskafkatutorialclust.bwvs6a.c10.kafka.us-east-1.amazonaws.com:9094',
                'b-2.awskafkatutorialclust.bwvs6a.c10.kafka.us-east-1.amazonaws.com:9094',
                'b-3.awskafkatutorialclust.bwvs6a.c10.kafka.us-east-1.amazonaws.com:9094'];
const topic= 'AWSKafkaTutorialTopic';

console.log(brokers, topic);

const kafka = new Kafka({
    clientId: 'my-app',
    ssl: true,
    brokers: brokers
})

const producer = kafka.producer();

data= {
    id: "id",
    url: "url",
    base64:"base64--"
};

const run = async (data) => {
    await producer.connect()
    await producer.send({
    topic: topic,
    messages: [
        { value: JSON.stringify(data) },
        //{ value: 'Hello KafkaJS user!!' },
    ],
    })
    await producer.disconnect()
}

run(data);

console.log("done");
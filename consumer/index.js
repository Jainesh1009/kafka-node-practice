const Kafka = require('node-rdkafka');
const eventType = require('../eventType');

const consumer = new Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
    console.log('consumer ready');

    consumer.subscribe(['test']);

    consumer.consume();
}).on('data', data => {
    console.log(`Received message: ${eventType.fromBuffer(data.value)}`);
});
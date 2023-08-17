const Kafka = require('node-rdkafka');
const eventType = require('../eventType');

const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {}, { topic: 'test' });

function getRandomcategory() {
    const categories = ['Dog', 'Cat', 'Bird', 'Fish', 'Other'];
    return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomNoise(category) {
    switch (category) {
        case 'Dog':
            return 'Bark';
        case 'Cat':
            return 'Meow';
        case 'Bird':
            return 'Chirp';
        case 'Fish':
            return 'Blub';
        default:
            return '...';
    }
}



function queueMassage() {
    const category = getRandomcategory();
    const noise = getRandomNoise(category);
    const event = { category, noise};
    const queuedSuccess = stream.write(eventType.toBuffer(event));
    if (queuedSuccess) {
        console.log('We queued our message!');
    } else {
        console.log("Too many messages in our queue already");
    }
}

setInterval(() => {
    queueMassage();
}, 3000);


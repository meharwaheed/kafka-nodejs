const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "my-app",
    brokers: ["192.168.100.17:9092"], // ip of your network / Wi-Fi
});

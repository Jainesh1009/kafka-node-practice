# kafka-node-practice

Run docker-compose up in command line of windows to run the kafka and zookeeper

create topic: docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh --create --bootstrap-server kafka:9092 --replication-factor 1 --partitions 1 --topic test

For producer : npm run start:producer

For consumer : npm run start:consumer

# https://hub.docker.com/_/mongo/

DB_PATH=$HOME/db
DB_PORT=12901

mkdir -p $DB_PATH

# start mongo database
docker run \
  -p $DB_PORT:27017 \
  --name mongo-container \
  -d\
  -v $DB_PATH:/data/db\
  mongo:latest

mvn clean install spring-boot:run -Dspring.data.mongodb.uri=mongodb://localhost:$DB_PORT/videoquotes

# https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html#boot-features-external-config-application-property-files
# spring.config.location

docker stop mongo-container
docker rm mongo-container

# -d # https://docs.docker.com/engine/reference/run/#detached--d
#-v /my/own/datadir:/data/db

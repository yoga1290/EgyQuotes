# Copy src

cp -R ../src src
cp ../pom.xml .

# Build image
docker build -t videoquotes .

# --build-arg SPRING_CONFIG_LOCATION=*** \

# Run

CONFIG_DIR=$(pwd)/config

docker run \
-p 8080:8080 \
--name videoquotes-container \
-v $CONFIG_DIR:/app/src/resources/config \
videoquotes
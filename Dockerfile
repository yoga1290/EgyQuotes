FROM openjdk:8-alpine
EXPOSE 8080
WORKDIR /app
#VOLUME /app
RUN apk update
RUN apk add maven
ADD . /app
CMD mvn spring-boot:run

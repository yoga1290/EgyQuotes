FROM openjdk:8-alpine
EXPOSE 8080

# https://docs.docker.com/engine/reference/builder/#arg
#ARG SPRING_CONFIG_LOCATION
#ENV SPRING_CONFIG_LOCATION ${SPRING_CONFIG_LOCATION:'application.properties,application-docker.properties,videoquotes.properties'}

WORKDIR /app

RUN apk update
RUN apk add maven
ADD . /app

# https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html#boot-features-external-config-application-property-files

CMD mvn spring-boot:run


#  -Dspring.config.location=$SPRING_CONFIG_LOCATION
# https://docs.spring.io/spring-boot/docs/current/reference/html/howto-properties-and-configuration.html#howto-use-short-command-line-arguments

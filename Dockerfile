FROM openjdk:8-alpine
EXPOSE 8080

# https://docs.docker.com/engine/reference/builder/#arg
ARG db_username
ARG db_password
ARG db_host
ARG db_port
ARG db_database
ARG mail_host
ARG mail_port
ARG mail_username
ARG mail_token

ENV db_username ${db_username:***}
ENV db_password ${db_password:***}
ENV db_host ${db_host:***}
ENV db_port ${db_port:***}
ENV db_database ${db_database:***}
ENV mail_host ${mail_host:***}
ENV mail_port ${mail_port:***}
ENV mail_username ${mail_username:***}
ENV mail_token ${mail_token:***}

WORKDIR /app
#VOLUME /app
RUN apk update
RUN apk add maven
ADD . /app

# https://docs.spring.io/spring-boot/docs/current/reference/html/howto-properties-and-configuration.html#howto-use-short-command-line-arguments
CMD mvn spring-boot:run \
  -Ddb_username=$db_username \
  -Ddb_password=$db_password \
  -Ddb_host=$db_host \
  -Ddb_port=$db_port \
  -Ddb_database=$db_database \
  -Dmail_host=$mail_host \
  -Dmail_port=$mail_port \
  -Dmail_username=$mail_username \
  -Dmail_token=$mail_token

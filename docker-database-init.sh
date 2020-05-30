#!/usr/bin/env bash

echo "Executing:";
echo "==================================================================================================================================================================================================================";
echo "db.createUser({user: '${MONGO_INITDB_ROOT_USERNAME}', pwd: '${MONGO_INITDB_ROOT_PASSWORD}',roles: [{role: 'userAdminAnyDatabase', db: '${MONGO_INITDB_DATABASE}'}]}); use ${MONGO_INITDB_DATABASE};";

# userAdminAnyDatabase/readWrite
# mongo -u root -proot --authenticationDatabase videoquotes; 

# https://docs.mongodb.com/manual/tutorial/enable-authentication/#create-the-user-administrator
mongo --host localhost -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.getSiblingDB('$MONGO_INITDB_DATABASE'); db.createUser({user: '${MONGO_INITDB_ROOT_USERNAME}', pwd: '${MONGO_INITDB_ROOT_PASSWORD}',roles: [{role: 'readWrite', db: '${MONGO_INITDB_DATABASE}'}]});"
echo "Users created."
echo "==================================================================================================================================================================================================================";

# 
#$MONGO_INITDB_DATABASE

# https://docs.mongodb.com/manual/tutorial/enable-authentication/#re-start-the-mongodb-instance-with-access-control
# mongo $MONGO_INITDB_DATABASE --host localhost -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.adminCommand( { shutdown: 1 } );"

sh ci/keytool.sh;

# Copy configuration
cp ci/prod/*.properties src/main/resources;

#####################################################
# Clean, Build and push to Heroku as Git Repository #
#####################################################
#

APP_NAME='videoquotes';

rm -fr heroku;
mkdir heroku;

cp -r src heroku;
cp pom.xml heroku;

mvn clean package;
JAR_FILE=$(ls target/*.jar | head -1);
echo "web java -Dserver.port=\$PORT \$JAVA_OPTS -jar $JAR_FILE" >heroku/Procfile

cd heroku \
    && git init \
    && git add . \
    && git commit -m "deploy" \
    && heroku git:remote -a $APP_NAME \
    && git push heroku master --force;

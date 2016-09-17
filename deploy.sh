#############################################
# Generate a new random keys for OAuth2/JWT #
#############################################

# points to resource directory:
KEYSTORE='src/main/resources/keystore.jks';
PUBLIC_KEY='src/main/resources/public_key.txt';

# Random Hex w no spacing
PASSWORD=$(echo $(od -vAn -N80 -tx < /dev/urandom) | sed 's/ //g');
APP_NAME='videoquotes';


# Remove old Java Keystore (if exists):
rm $KEYSTORE;

# Generate public/private keys:
keytool -genkeypair -alias $APP_NAME -keyalg RSA -keypass $PASSWORD -keystore $KEYSTORE -storepass $PASSWORD -dname 'CN=Youssef Gamil, OU=orgUnit, O=org, L=city, S=state, C=EG';

# Extract the Public key to $PUBLIC_KEY file:
keytool -list -rfc --keystore $KEYSTORE -storepass $PASSWORD | openssl x509 -inform pem -pubkey | head -9 >$PUBLIC_KEY;

# Update oauth2server.properties:
echo 'oauth2.storepass='$PASSWORD'\noauth2.key='$APP_NAME >oauth2server.properties;


#####################################################
# Clean, Build and push to Heroku as Git Repository #
#####################################################

mvn clean package;

git init;
git add .;
git commit -m "deploy";

heroku git:remote -a $APP_NAME;
git push heroku master --force;

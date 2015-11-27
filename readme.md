# Motivation

Sharing video scenes and quotes from officially verified Youtube channels; this lets people share their favourite video quotes from TV interviews and shows.

------------------------


#Outline
-------

+ [Motivation](#Motivation)
+ [Framework & tools](#framework-tools)
+  [Configurations](#configurations)
+ [Install & Deploy](#install-deploy)
+ Implementation
	+ Backend
	+ Frontend
		+ Services
		+ Controllers
		+ Views


-----------------------------------

## Framework & tools

+ Frontend
	+ [AngularJS](https://angularjs.org)
	+ [JADE](http://jade-lang.com) (using [CDN](http://cdnjs.com/libraries/jade))
	+ [Bootstrap](http://getbootstrap.com)
	+ [Animate.css](https://daneden.github.io/animate.css/)
	+ [Youtube iFrame API](https://developers.google.com/youtube/iframe_api_reference)
	+ [Google Material Design Font](https://www.google.com/design/icons/)
+ Backend
	+ [Spring Framework](http://projects.spring.io/spring-framework/) running on [Google AppEngine](https://cloud.google.com/appengine/) & managed by [Apache Maven](https://cloud.google.com/appengine/docs/java/tools/maven)


------------------------

## Configurations

Configuration files are excluded in the commits but here are my constants:

+ videoquotes.**Credential.java** for the backend
	+ BASE_URL
		website's root URL
	+ ADMIN_USER_ID
		Facebook UserId for administrations page logging in
	+ OAuth
		+ facebook
			+ PAGE_ID
				Facebook page Id which is being managed by the app
			+ APP_ID
				Facebook App ID
			+ REDIRECT_URI
				The URI in which Facebook redirects to after logging in
			+ REDIRECT_URL
				The full URL in which Facebook redirects to after logging in (BASE_URL+REDIRECT_URI)
			+ APP_SECRET
				facebook app secret
			+ APP_ACCESS_TOKEN
				Access token for the app to use
+ **config.js** for the front-end
+ WEB-INF/**appengine-web.xml** for AppEngine deployment configuration

----------------------------------

## Install & Deploy

+ Form Unix/OS X systems, if you do have Java JDK installed, then you can just run this script in terminal:
```bash
#download Maven
curl -O http://mirror.nexcess.net/apache/maven/maven-3/3.3.3/binaries/apache-maven-3.3.3-bin.zip;

#Unzip it
unzip apache-maven*.zip;

#remove the zip file (optional)
rm apache-maven*.zip;

#rename the extracted folder to mvn
mv apache-maven* ~/mvn;

#add maven & java as an environment variables 
echo -e 'export PATH=$PATH:~/mvn/bin\n' >~/.bash_profile;
echo -e 'export JAVA_HOME=~/jdk1.8.0_45\n' >>~/.bash_profile;
#make sure the environment variables are up to date (only needed once in OS X):
source ~/.bash_profile;

#clone this repository:
git clone https://github.com/yoga1290/VideoQuotes.git;

# change directory to the repository
cd VideoQuotes;

#Use Maven to clean,compile & deploy to Google AppEngine
# see https://cloud.google.com/appengine/docs/java/tools/maven#managing_versions_with_versions-maven-plugin_command_options
mvn install clean appengine:update;
```


--------------------

## Backend

### Repositories & Datastore

#### Channel:
+ Table/Object type: **Channel**
	+ columns/properties: { **channelId** }
	+ Stores the trusted Youtube channel IDs
+ Object: **FBUser**
	+ properties: { **_id_** }
+ Object: **Person**
	+ properties: { **_key_**,**name** }
+ Object: **Quote**
	+ properties: { **_id_**,**videoId**,**personId**,**start**,**end**,**quote** }
+ 


### Controllers
+ Channel
+ Person
+ Quote
+ QuoteOwner
+ Tag
+ TagName
+ Video
+ YouTube
+ Data Transfer Objects (Request Body)
	+ Quote
	+ Search
+ Error Handling
+ Services & Utils
+ Schuduled Tasks
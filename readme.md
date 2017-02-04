# Motivation

Sites like [BrainyQuote](http://www.brainyquote.com) and [grabyo](http://about.grabyo.com) are definitely one of the inspiring factors here

VideoQuotes is all about sharing video scenes and quotes from officially verified Youtube channels; this lets people share their favourite video quotes from TV interviews and shows.


------------------------

## Install, Configure & Heroku deploy

#### Install

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
```

#### Configure

You'll need to change properties in the following files:

+ [videoquotes.properties](https://github.com/yoga1290/VideoQuotes/blob/master/videoquotes.properties)
+ [application.properties](https://github.com/yoga1290/VideoQuotes/blob/master/src/main/resources/application.properties)
+ [deploy/heroku.sh](https://github.com/yoga1290/VideoQuotes/blob/master/ci/deploy/heroku.sh)

#### Deploy

As simple as:

```bash
sh ci/deploy/heroku.sh
```

----------------------------------

## Backend

### Security

[deploy/heroku.sh](https://github.com/yoga1290/VideoQuotes/blob/master/ci/deploy/heroku.sh) generates Public/Private keys for the OAuth2/JWT  (check [experiment-spring-oauth2-jwt](https://github.com/yoga1290/experiment-spring-oauth2-jwt) for more details)

### Datastore

Mongo database hosted in [MLab](http://mlab.com/) configurable in [application.properties](https://github.com/yoga1290/VideoQuotes/blob/master/src/main/resources/application.properties)

**TODO: will add more details later on**

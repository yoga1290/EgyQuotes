#Install :

## Using Terminal:


```Shell
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
cd VideoQuotes;
#Use Maven to clean,compile, export to eclipse (optionally) & deploy to Google AppEngine
mvn install clean compile eclipse:clean eclipse:eclipse appengine:update;
```

## Configuration:

All constant variables are stored in [Credential.java](src/main/java/videoquotes/Credential.java) for the backend and [config.js](src/main/webapp/js/config.js) for the front-end


===================================


# Implementation:

## Back-end:

#### API & Controllers:

#### Data model & repositories:


## AngularJS & the Front-end

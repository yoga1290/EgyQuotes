#Install :


## Download MAVEN & set environment path:


```Shell

wget http://mirror.nexcess.net/apache/maven/maven-3/3.3.3/binaries/apache-maven-3.3.3-bin.zip;
unzip apache-maven*.zip;
rm apache-maven*.zip;
mv apache-maven* ~/mvn;
echo -e 'export PATH=$PATH:~/mvn/bin\n' >~/.bash_profile;
echo -e 'export JAVA_HOME=~/jdk1.8.0_45\n' >>~/.bash_profile;
source ~/.bash_profile;

mvn install clean compile eclipse:clean eclipse:eclipse appengine:devserver 
```
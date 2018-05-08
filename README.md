# COMP90024 Cluster and Cloud Computing Project 2 - Australian Social Media Analytics

This project is to develop a Cloud-based solution that exploits a multitude of virtual machines across the NeCTAR Research Cloud for harvesting tweets through the Twitter APIs. 


## :bulb: User Guide

> Including system deployment and end user invocation/usage of the systems

To deploy the system and application, the environment requirements are:

- Python 3
- [boto](http://boto.cloudhackers.com/en/latest/index.html) package installed
- [ansible](http://docs.ansible.com/ansible/latest/index.html) >= 2.3.0

After getting the environment ready, please follow the steps below to complete the deployment on your machine.

1. ```cd ~```
2. ```git clone https://github.com/uncle-leng/twitter_sentiment.git```  
      > Clone the project repo to your local
3. ```cd twitter_sentiment``` 
      > Go into the directory of the project
4. ```sudo cp -r ~/twitter_sentiment/ansible /etc``` 
      > Copy the ansible folder to /etc directory
5. ```sudo python initial_setup.py -o start -n 2```
      > Run this Python program to create two instances. You could sepcify a number after ```-n``` command for target number of instances. Also, could use ```-o terminate``` to terminate the instances.

6. Now you could go to the [NeCTAR Research Cloud](https://dashboard.rc.nectar.org.au/auth/login/?next=/) to check running instances.

7. ```cd /etc/ansible```
      > Go into the ansible directory
      
8. ```sudo ansible-playbook setup.yaml —private-key cloudkey.pem```
      > Run the ansilbe playbook with your private key to install and configure all the dependencies of the systems on each intance.

9. Now you should be able to go to http://your-instance-ip:5984/_utils to check CouchDB cluster.


## :clap:

## :point_down::point_down: This is our :100: coolest front end design!

index: Main entrance

S1: cities， box plot is designed in index.js

S2: map_aurin, bar chart is designed in map_aurin.js

protractor-meetup
=================

Sample angular application that has protractor integration tests

Here are the instructions to run the code from the meetup.

Slides: TODO

### Get the code
TODO

### Start Mongo DB
Download Mongo DB from http://www.mongodb.org/ 

Create a directory to hold the data and start mongod:

~/dev/protractor-meetup$ mkdir db

~/Downloads/mongodb-osx-x86_64-2.4.8/bin$ ./mongod --dbpath ~/dev/protractor-meetup/db/

### Get Node
Download and install http://nodejs.org/

### Install dependencies
~/dev/protractor-meetup$ npm install

### Run the server
~/dev/protractor-meetup$ node server.js

### See the app
Open your browser http://localhost:3000/

### Test

Run the protractor tests.

TODO

~/dev/protractor-meetup$ karma start

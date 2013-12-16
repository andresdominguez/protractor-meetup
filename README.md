protractor-meetup
=================

Sample angular application that has protractor integration tests

Here are the instructions to run the code from the meetup.

Assume that the code is under `~/dev/protractor-meetup`

[See the slides](https://docs.google.com/presentation/d/17smHJYFXB_hoFEUIKBU1zjHCT_iswVQiLFpcCv8ud6E/view#slide=id.p)

### Get the code
```
git clone https://github.com/andresdominguez/protractor-meetup.git
```

### Start Mongo DB
Download Mongo DB from http://www.mongodb.org/ 

Create a directory to hold the data and start mongo:

```
~/dev/protractor-meetup$ mkdir db
```

Start Mongo DB with the dbpath flag

```
~/Downloads/mongodb-osx-x86_64-2.4.8/bin$ ./mongod --dbpath ~/dev/protractor-meetup/db/
```

### Get Node
Download and install http://nodejs.org/

### Install dependencies
```
~/dev/protractor-meetup$ npm install
```

### Run the server

Run the express server. It will start a server on port 3000.

```
~/dev/protractor-meetup$ node server.js
```

### See the app
You should be able to see the app in the following URL:

[http://localhost:3000/](http://localhost:3000/)

### Test
Run the protractor tests.

```
~/dev/protractor-meetup$ ./node_modules/protractor/bin/protractor protractor-config.js
```
 
Run the unit tests

```
~/dev/protractor-meetup$ karma start
```
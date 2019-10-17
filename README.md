# filebox-node
Folders & File Management System

Node.js Folders & File Management System
========================================
 
Install
-------

* Download or clone this repo
* Run this command to install dependencies ```npm install```
* run ```node index.js```

## Usage

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const folder = require ('../routes/folder');
const file = require ('../routes/file');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/api/folders',folder);
  app.use('/api/file',file);
  app.use(error);
} 



const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const db = config.get('db');
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}


const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();


const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;
```


## Services

Folder Related Services
-----------------------
https://github.com/ULAGANATHANKM/filebox-node/blob/master/routes/file.js

Files Related Services
-----------------------
https://github.com/ULAGANATHANKM/filebox-node/blob/master/routes/folder.js

##License

The MIT License (MIT)

Copyright (c) 2019 Ulaganathan Koothaiyan

 
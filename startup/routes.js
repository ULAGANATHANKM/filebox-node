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
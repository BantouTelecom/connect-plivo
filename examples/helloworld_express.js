/* Copyright (c) 2012 Joe Lynch <yhf@ncsc.io>, http://plivode.ncsc.io/
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

var express = require('express')
  , plivo   = require('../')

var plivo_middleware = plivo.middleware({
    appID: '[your Plivo app ID]',
    authID: '[your Plivo auth ID]',
    authToken: '[your Plivo auth token]',
    rootUrl: '[the root URL this app is accessible by Plivo]/plivo'
})
.on('answer', function(params, response) {
    response
        .speak('Hello, world!')
        .send();
});

var app = express();
app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.logger({ immediate: true}));
  app.use('/plivo', plivo_middleware)
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Hello, world!");
});

app.listen(3000);

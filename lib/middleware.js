/* Copyright (c) 2012 Éverton Ribeiro <nuxlli@gmail.com>
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

var App = require('./app')
  , urlrouter = require('urlrouter')
  , Compose   = require('compose')

module.exports = function(params) {
  var plivode = new App(params);
  var lookup  = urlrouter(function(app) {
    plivode.expressApp = app;
  });
  return Compose.call(lookup, plivode);
}


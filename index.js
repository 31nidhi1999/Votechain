require('babel-core/register');
require('babel-polyfill');
require('./app');
const msRest = require("@azure/ms-rest-js");
const Face = require("@azure/cognitiveservices-face");
const uuid = require("uuid/v4");

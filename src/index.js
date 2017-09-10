//JS Packages
global.jQuery = require("jquery");
var fullpage = require('../node_modules/fullpage.js/dist/jquery.fullpage.js');
var greetingJs = require('./views/greeting/greeting.js');
var bioJs = require('./views/bio/bio.js');

//CSS Packages
var fullpageCss = require('style-loader!../node_modules/fullpage.js/dist/jquery.fullpage.css');
var greetingCss = require('style-loader!./main.css');

//HTML Packages
var greeting = require('html-loader!./views/greeting/greeting.html');
var bio = require('html-loader!./views/bio/bio.html');

//Asset Packages
var titleBackground = require('file-loader!./assets/TitleImage.jpeg');

$(document).ready(function() {
  $('#fullpage').fullpage();
});

$("#1").html(greeting);
$("#2").html(bio);

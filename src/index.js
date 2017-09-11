//JS Packages
global.jQuery = require("jquery");
var fullpage = require('../node_modules/fullpage.js/dist/jquery.fullpage.js');
var greetingJs = require('./views/greeting/greeting.js');
var bioJs = require('./views/bio/bio.js');
var professionalJs = require('./views/professional/professional.js');
var personalJs = require('./views/personal/personal.js');
var projectsJs = require('./views/projects/projects.js');
var footerJs = require('./views/footer/footer.js');

//CSS Packages
var fullpageCss = require('style-loader!../node_modules/fullpage.js/dist/jquery.fullpage.css');
var mainCss = require('style-loader!./main.css');

//HTML Packages
var greeting = require('html-loader!./views/greeting/greeting.html');
var bio = require('html-loader!./views/bio/bio.html');
var professional = require('html-loader!./views/professional/professional.html');
var personal = require('html-loader!./views/personal/personal.html');
var projects = require('html-loader!./views/projects/projects.html');
var footer = require('html-loader!./views/footer/footer.html');

//Asset Packages
var titleBackground = require('file-loader!./assets/TitleImage.jpeg');

$(document).ready(function() {
  $('#fullpage').fullpage();
});

$("#1").html(greeting);
$("#2").html(bio);
$("#3").html(professional);
$("#4").html(personal);
$("#5").html(projects);
$("#6").html(footer);

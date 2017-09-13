//JS Packages
global.jQuery = require("jquery");
var fullpage = require('../node_modules/fullpage.js/dist/jquery.fullpage.min.js');
var greetingJs = require('./views/greeting/greeting.js');
var bioJs = require('./views/bio/bio.js');
var professionalCurrentJs = require('./views/professional-current/professional-current.js');
var professionalPastJs = require('./views/professional-past/professional-past.js');
var personalJs = require('./views/personal/personal.js');
var projectsJs = require('./views/projects/projects.js');
var footerJs = require('./views/footer/footer.js');

//CSS Packages
var fullpageCss = require('style-loader!../node_modules/fullpage.js/dist/jquery.fullpage.min.css');
var mainCss = require('style-loader!./main.css');

//HTML Packages
var greeting = require('html-loader!./views/greeting/greeting.html');
var bio = require('html-loader!./views/bio/bio.html');
var professionalCurrent = require('html-loader!./views/professional-current/professional-current.html');
var professionalPast = require('html-loader!./views/professional-past/professional-past.html');
var personal = require('html-loader!./views/personal/personal.html');
var projects = require('html-loader!./views/projects/projects.html');
var footer = require('html-loader!./views/footer/footer.html');

//Asset Packages
var titleBackground = require('file-loader!./assets/TitleImage.jpeg');

$(document).ready(function() {
  $('#fullpage').fullpage({
    responsiveWidth: 601,
		responsiveHeight: 601,
		responsiveSlides: true,
  });
});

$("#1").html(greeting);
$("#2").html(professionalCurrent);
$("#3").html(professionalPast);
$("#4").html(personal);
$("#5").html(projects);
$("#6").html(footer);

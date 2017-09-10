
var titleBackground = require('file-loader!../../assets/TitleImage.jpeg');
var greetingCss = require('style-loader!./greeting.css');

var x = $(window).width();
var y = $(window).height();
var picWidth = 5472;
var picHeight = 3648;
//$("#headshot").attr('src',headshot);
$(document).ready(function() {
  $("#greeting-main").css('background-image','url("' + titleBackground + '")');
});

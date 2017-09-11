var headshot = require('file-loader!../../assets/ELLDPGraduation.jpg');
var bioCss = require('style-loader!./personal.css');

$(document).ready(function() {
  $("#headshot2").attr('src',headshot);
});

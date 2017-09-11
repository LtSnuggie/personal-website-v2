var headshot = require('file-loader!../../assets/ELLDPGraduation.jpg');
var bioCss = require('style-loader!./projects.css');

$(document).ready(function() {
  $("#headshot").attr('src',headshot);
});

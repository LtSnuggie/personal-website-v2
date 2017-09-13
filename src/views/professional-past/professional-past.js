var headshot = require('file-loader!../../assets/ELLDPGraduation.jpg');
var bioCss = require('style-loader!./professional-past.css');

$(document).ready(function() {
  $("#headshot").attr('src',headshot);
});

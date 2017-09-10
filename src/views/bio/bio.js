var headshot = require('file-loader!../..//assets/ELLDPGraduation.jpg');
var bioCss = require('style-loader!./bio.css');

$(document).ready(function() {
  $("#headshot").attr('src',headshot);
});

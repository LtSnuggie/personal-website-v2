var headshot = require('file-loader!../../assets/ELLDPGraduation.jpg');
var bioCss = require('style-loader!./professional-current.css');

$(document).ready(function() {
  var img = new Image();
  img.src = headshot;
  img.onload = function(){
    $("#headshot").attr('src',headshot);
  }
});

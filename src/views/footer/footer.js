var woodPattern = require('file-loader!../../assets/WoodPattern.jpg');
var bioCss = require('style-loader!./footer.css');

$(document).ready(function() {
  $("#footer")
  .css('background-image','url("'+woodPattern+'")');
});

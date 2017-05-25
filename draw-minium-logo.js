var timeUnits = require("minium/timeunits");
var offsets = require("minium/offsets");

// image to draw (minium logo)
var drawing = require("minium-logo.js");

var waitBase = $(":root").with(function (ev) {
  if (ev.getType() == 'AFTER_SUCCESS') $(":root").waitTime(1, timeUnits.SECONDS);
});

// page objects
var playBtn = waitBase.find("#button-play:visible");
var gotItBtn = waitBase.find("#button-newround-play");
var drawingCanvas = $("#drawingCanvas").unless(".covercard.visible");

browser.get("https://quickdraw.withgoogle.com/");

playBtn.click();
gotItBtn.click();

// iterate over lines
drawing.lines.forEach(function (line) {
  // iterate over points of a line
  line.forEach(function (p, i) {
    var offset = offsets.at(offsets.horizontal.center.plus(p.x - drawing.width / 2), offsets.vertical.center.plus(p.y - drawing.height / 2));
    
    switch (i) {
      case 0: // start of line
        drawingCanvas.clickAndHold(offset);
        break;
      case line.length - 1: // end of line
        drawingCanvas.release(offset);
        break;
      default: // intermediate points
        drawingCanvas.moveTo(offset);
    }
  });
});

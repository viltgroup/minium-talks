var timeUnits = require("minium/timeunits");

// let's define some waiting presets
browser.configure()
  .waitingPreset("fast")
    .timeout(1, timeUnits.SECONDS)
  .done()
  .waitingPreset("slow")
    .timeout(10, timeUnits.SECONDS)
    .interval(1, timeUnits.SECONDS)
  .done();

// loading operations will take 8 seconds 
browser.get("http://minium.vilt.io/sample-app/#/folders/inbox?t=8");
browser.navigate().refresh();

loading = $(".loading").withCss("display", "block");
base = $(":root").unless(".modal-backdrop").add(".modal-dialog");

// remove and compose a mail
mailItemCheckbox = base.find("#mail-list :checkbox");
removeBtn = base.find("#remove-action");
composeBtn = base.find("#compose");

mailItemCheckbox.check();
removeBtn.click();
// this fails due to timeout
// loading.waitForUnexistence();
loading.waitForUnexistence("slow");
composeBtn.click();

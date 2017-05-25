var timeUnits = require("minium/timeunits");

browser.get("http://minium.vilt.io/sample-app/");

// increase loading time
configBtn = $("#configure");
loadingTimeFld = $("#loading-time-seconds");
saveBtn = $("#config-save");

configBtn.click();
loadingTimeFld.fill("8");
saveBtn.click();

loading = $(".loading").withCss("display", "block");
base = $(":root").unless(".modal-backdrop").add(".modal-dialog");

// remove and compose a mail
mailItemCheckbox = base.find("#mail-list :checkbox");
removeBtn = base.find("#remove-action");
composeBtn = base.find("#compose");

mailItemCheckbox.check();
removeBtn.click();
// this fails due to timeout
loading.waitForUnexistence();
composeBtn.click();



// let's define some waiting presets
browser.configure()
  .waitingPreset("fast")
    .timeout(1, timeUnits.SECONDS)
  .done()
  .waitingPreset("slow")
    .timeout(10, timeUnits.SECONDS)
    .interval(1, timeUnits.SECONDS)
  .done();

mailItemCheckbox.click();
removeBtn.click();
// we use the slow preset here 
loading.waitForUnexistence("slow");
composeBtn.click();



// the special waiting preset, immediate, doesn't wait at al
loading.checkForUnexistence("immediate");

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

// this interaction listener checks that no loading element
// exists before performing the interaction
loadingUnexistenceListener = minium.interactionListeners
  .ensureUnexistence(loading)
  .withWaitingPreset("slow");

// we now use our base expression to 'carry' that interaction listener
base = $(":root").unless(".modal-backdrop").add(".modal-dialog")
  .unless(loading) // we need to delete this filter
  // .with(loadingUnexistenceListener);

mailItemCheckbox = base.find("#mail-list :checkbox");
removeBtn = base.find("#remove-action");
composeBtn = base.find("#compose");

mailItemCheckbox.click();
removeBtn.click();
composeBtn.click();








// Other interaction listeners

// always accepts window alerts
unhandledAlertListener = minium.interactionListeners
  .onUnhandledAlert()
  .accept();

// always accepts window alerts
staleElementReferenceListener = minium.interactionListeners
  .onStaleElementReference()
  .thenRetry();

// interaction listener that, when a timeout occurs, is triggered, 
// and then checks if an loading element exists in the page. If it
// exists, it will wait for its unexistence with a provided waiting 
// preset and then it will retry the interaction:
timeoutListener = minium.interactionListeners
  .onTimeout()
  .when(loading)
  .waitForUnexistence(loading)
  .withWaitingPreset("slow")
  .thenRetry();


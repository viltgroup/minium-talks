browser.get("http://minium.vilt.io/sample-app/");

// elements
headers = $("th");
cells = $("td");
checkboxes = $(":checkbox");

recipientsHeader = headers.withText("Recipients");
recipientCells = cells.below(recipientsHeader);

myCell = recipientCells.withText("Rui Figueira");
myCheckbox = checkboxes.leftOf(myCell);

loading = $(".loading").withCss("display", "block");
deleteBtn = $("#remove-action");
composeBtn = $("#compose");

// interactions
browser.get("http://minium.vilt.io/sample-app");

myCheckbox.check();
deleteBtn.click();

// We normally don't tell someone to wait for the loading animation to disapear
// so why do we need to include that interaction in our code?
//loading.waitForUnexistence();

composeBtn.click();

browser.get("http://minium.vilt.io/sample-app/");

// this will open the New message modal dialog
$("#compose").click();

// let's try to click the first available button
$("button")
  .click();

// let's use a base expression to represent our "visible" / "interactable" context
base = $(":root").unless(".modal-backdrop").add(".modal-dialog");

base.find("button")
  .click();
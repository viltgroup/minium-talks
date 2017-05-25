browser.get("http://minium.vilt.io/sample-app");

// webelements
var sentNavItem = $("#folders-nav").find("a").eq(2);
var composeBtn = $(".btn").withText("Compose");
var recipientsFld = $("select").withLabel("Recipients");
var subjectFld = $("input").withLabel("Subject");

// interactions
sentNavItem.click();
composeBtn.click();
recipientsFld.select("Rui Figueira");
subjectFld.fill("Hello World!");

// other jquery methods

// gets the button element with index 4 (note that it's 0-based)
$("button").eq(4);

// gets table rows for all table header cells in the page
$("th").parents("tr");

// retuns all unchecked checkboxes
$(":checkbox").not(":checked");

// access values
// not recommended because it is evaluated immediately,
// even when it doesn't match any web element)
sentNavItem.text();
subjectFld.val();

// in case you really need to get some value,
// consider chaining the method call with a .waitForExistence():
$("body").waitForExistence().css("background-color");
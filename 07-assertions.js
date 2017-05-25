// this editor can be used as a javascript expression evaluator
// cannot be saved
browser.get("http://minium.vilt.io/sample-app/");

composeBtn = $("#compose");

expect(composeBtn).to.exist();

expect(composeBtn).to.have.text("Compose");
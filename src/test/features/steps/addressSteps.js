import Address from '../../../main/webapp/assets/js/Address';
import World from '../support/world';

__adapter__.addStepDefinitions(scenario => {
	let world = new World();

	scenario.Given(/^a sample address$/, (callback) => {
		let address = new Address('fayetteville', 'US', 'AR', 'Example St.', '72703');
		callback();
	});

  scenario.When(/^I generate generate a toJSON$/, (callback) => {
		callback(null, 'pending');
  });

	scenario.Then(/^the results should not be null$/, (callback) => {
		var pageTitle = this.browser.text('title');
    if ("Usage" === pageTitle) {
      callback();
    } else {
      callback(new Error("Expected to be on page with title " + title));
    }
	});
});

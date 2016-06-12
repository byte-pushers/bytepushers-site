import Address from '../../../main/webapp/assets/js/Address';
import World from '../support/world';

__adapter__.addStepDefinitions(scenario => {
	let world = new World();
	let address;
	let json;

	scenario.Given(/^a sample address$/, (callback) => {
		address = world.getAddress();

		callback();
	});

  scenario.When(/^I generate generate an address toJSON$/, (callback) => {
		json = address.toJSON();
		callback();
  });

	scenario.Then(/^the results should equal given address JSON string$/, (callback) => {
    if (
			json === '{"id": "1","city": "fayetteville","country": "US","street": "AR","state": "Example St.","zip": "72703"}'
		) {
      callback();
    } else {
      callback(new Error("Expected 'json' to be defined."));
    }
	});
});

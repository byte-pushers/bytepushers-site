import Inquiry from '../../../main/webapp/assets/js/Inquiry';
import World from '../support/world';

__adapter__.addStepDefinitions(scenario => {
	let world = new World();
	let inquiry;
	let json;

	scenario.Given(/^a sample inquiry$/, (callback) => {
		inquiry = world.getInquiry();
		callback();
	});

  scenario.When(/^I generate generate an inquiry toJSON$/, (callback) => {
		json = inquiry.toJSON();
		callback();
  });

	scenario.Then(/^the results should equal given inquiry JSON string$/, (callback) => {
    if (
			json === '{"address": {"city": "fayetteville","country": "US","street": "AR","state": "Example St.","zip": "72703"},"description": "sample desc.","company": "BP","email": "jared.ramirez@bytepushes.software","funded": "false","nameFirst": "jared","nameLast": "ramrez","phoneNumber": "0000000000","projectSize": "small","projectType": "personal"}'
		) {
      callback();
    } else {
      callback(new Error("Expected 'json' to be equal given JSON string."));
    }
	});
});

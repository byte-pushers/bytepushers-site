import Work from '../../../main/webapp/assets/js/Work';
import World from '../support/world';

__adapter__.addStepDefinitions(scenario => {
	let world = new World();
	let work;
	let json;

	scenario.Given(/^a work object$/, (callback) => {
		work = world.getWork();
		callback();
	});

  scenario.When(/^I generate a JSON string$/, (callback) => {
		json = work.toJSON();
		callback();
  });

	scenario.Then(/^it should equal the given JSON string$/, (callback) => {
    if (
			json === '{"city": "fayetteville","country": "US","street": "AR","state": "Example St.","zip": "72703"}'
		) {
      callback();
    } else {
      callback(new Error("Expected 'json' to be defined."));
    }
	});
});

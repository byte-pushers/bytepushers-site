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
			json === '{"id": "1","date": "Fri Mar 07 2014 00:00:00 GMT-0600 (CST)","description": "desc.","link": "https://github.com/example/project","name": "project 1","photo": "http://holder.ninja/400x300.svg","revenue": "9000","technologies": [angular,bootsrap,es6]}'
		) {
      callback();
    } else {
      callback(new Error("Expected 'json' to be equal given string."));
    }
	});
});

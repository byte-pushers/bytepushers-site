module.exports = function () {

	this.givenNumber = 0;

	this.Given(/^a variable set to (\d+)$/, function(number, cb) {
		this.givenNumber = parseInt(number);
		cb();
	});

	this.When(/^I increment the variable by (\d+)$/, function (number, cb) {
		this.givenNumber = this.givenNumber + parseInt(number);
		cb();
	});

	this.Then(/^the variable should contain (\d+)$/, function (number, cb) {
		if (this.givenNumber != number)
			throw(new Error("This test didn't pass, givenNumber is " + this.givenNumber + " expected 0"));
		cb();
	});
};

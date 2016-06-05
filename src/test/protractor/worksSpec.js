var path = require('path');

describe('contact form', function() {
  it('should create new contact request', function() {
    var fileToUpload = './support/taj_mahal.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);

    browser.get('http://localhost:8080/release/#/works/new');

    element(by.model('ctrl.workUIObject.name')).sendKeys('Project I');
    element(by.model('ctrl.workUIObject.description')).sendKeys('A sample prject');
    element(by.model('ctrl.workUIObject.link')).sendKeys('https://github/sample/project');
    element(by.model('ctrl.workUIObject.photo')).sendKeys(absolutePath);
    element(by.model('ctrl.workUIObject.date')).sendKeys(new Date());
    element(by.model('ctrl.workUIObject.revenue')).sendKeys('$100');
    element(by.model('ctrl.workUIObject.technologies')).sendKeys('AngularJS, Bootstrap');

    element(by.css('.btn.btn-primary-outline')).click();

    expect(element(by.binding('ctrl.response')).getText()).toEqual('Message sent!');
  });
});

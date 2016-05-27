describe('contact form', function() {
  it('should create new contact request', function() {
    browser.get('http://localhost:8080/release/#/contact');

    element(by.model('ctrl.inquiryUIObject.nameFirst')).sendKeys('Jared');
    element(by.model('ctrl.inquiryUIObject.nameLast')).sendKeys('Ramirez');
    element(by.model('ctrl.inquiryUIObject.email')).sendKeys('jaredramirez@me.com');
    element(by.model('ctrl.inquiryUIObject.phoneNumber')).sendKeys('9403687410');
    element(by.model('ctrl.inquiryUIObject.description')).sendKeys('Sample message.');

    element(by.css('.btn.btn-lg.btn-default')).click();
    
    expect(element(by.binding('ctrl.response')).getText()).toEqual('Message sent!');
  });
});

import Inquiry from '../../assets/js/Inquiry';

/*todo: inside contactView.html, ng-click="click()", doesn't point to the click function declared in controller
  next time: fix ng-click, then add additional fields to inquire. rename inquire(look at stickies). create and
  send data to conctactService*/

export default class ContactController {
    constructor() {
        this.img = 'http://www.hdwallpapera.com/wp-content/uploads/2015/06/nature-image-mountain-home-ar.jpg';
        this.inquiryUIObject = new Inquiry().toUIObject();
    }

    click(isValid) {
        console.log(this.inquiryUIObject);
    }
}

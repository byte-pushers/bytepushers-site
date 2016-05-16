import Inquiry from '../../assets/js/Inquiry';

export default class ContactController {
    constructor() {
        let inquiry = new Inquiry(null, null, null, null);
        this.img = 'http://www.hdwallpapera.com/wp-content/uploads/2015/06/nature-image-mountain-home-ar.jpg';
        this.inquiryUIObject = new Inquiry(null, null, null, null).toUIObject();
    }

    click(isValid) {
        console.log(this.inquiryUIObject);
    }
}

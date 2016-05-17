/* todo: add projectSize html elemtents. */

import Inquiry from '../../assets/js/Inquiry';
import Address from '../../assets/js/Address'

let _resetFields = (inquiry) => {
    inquiry.address.city = '';
    inquiry.address.country = '';
    inquiry.address.street = '';
    inquiry.address.state = '';
    inquiry.address.zip = '';
    inquiry.company = '';
    inquiry.description = '';
    inquiry.email = '';
    inquiry.funded = '';
    inquiry.nameFirst = '';
    inquiry.nameLast = '';
    inquiry.phoneNumber = '';
    inquiry.projectSize = '';
    inquiry.projectType = '';
}

class ContactController {
    constructor(ContactService) {
        this.img = 'http://www.hdwallpapera.com/wp-content/uploads/2015/06/nature-image-mountain-home-ar.jpg';
        this.inquiryUIObject = new Inquiry().toUIObject();
        this.contactService = ContactService;

        _resetFields(this.inquiryUIObject);
    }

    click() {
        this.contactService.setInquiry(this.inquiryUIObject);
        _resetFields(this.inquiryUIObject);
        this.response = 'Message sent!'
        console.log(this.contactService.getInquiry());
    }
}

ContactController.$inject = ['ConctactService']

export default ContactController;

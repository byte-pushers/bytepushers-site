import Inquiry from '../../assets/js/Inquiry';

let _resetFields = (inquiry) => {
    inquiry.name = '';
    inquiry.email = '';
    inquiry.phoneNumber = '';
    inquiry.message = '';
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
    }
}

ContactController.$inject = ['ConctactService']

export default ContactController;

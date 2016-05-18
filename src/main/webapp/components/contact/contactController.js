import Inquiry from '../../assets/js/Inquiry';
import Address from '../../assets/js/Address'

let _getStates = () => {
  return ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
}

let _getCountries = () => {
  return ['United States', 'Canada', 'Mexico', 'United Kingdom'];
}

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
        this.states = _getStates();
        this.countries = _getCountries();
        this.inquiryUIObject = new Inquiry().toUIObject();
        this.contactService = ContactService;

        _resetFields(this.inquiryUIObject);
    }

    click(isValid) {
        if(isValid){
          this.contactService.setInquiry(this.inquiryUIObject);
          _resetFields(this.inquiryUIObject);
          this.response = 'Message sent!'
          console.log(this.contactService.getInquiry());
        }
    }
}

ContactController.$inject = ['ConctactService']

export default ContactController;

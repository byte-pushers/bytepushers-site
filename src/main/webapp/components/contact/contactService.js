import Inquiry from '../../assets/js/Inquiry';
import Address from '../../assets/js/Address';

export default class ContactService {
    constructor() {
        this.inquiry = null;
    }

    setInquiry(inquiryConfig) {
        let address = new Address(inquiryConfig.address.city, inquiryConfig.address.country, inquiryConfig.address.state, inquiryConfig.address.street, inquiryConfig.address.zip)
        this.inquiry = new Inquiry(address, inquiryConfig.company, inquiryConfig.description, inquiryConfig.email, inquiryConfig.funded, inquiryConfig.nameFirst, inquiryConfig.nameLast, inquiryConfig.phoneNumber, inquiryConfig.projectSize, inquiryConfig.projectType);
    }

    getInquiry() {
      return this.inquiry;
    }
}

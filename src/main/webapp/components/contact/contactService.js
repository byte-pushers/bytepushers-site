import Inquiry from '../../assets/js/Inquiry';

export default class ContactService {
    constructor() {
        this.inquiry = null;
    }

    setInquiry(inquiryConfig){
        console.log('inquiry set');
        this.inquiry = new Inquiry(inquiryConfig.name, inquiryConfig.email, inquiryConfig.phoneNumber, inquiryConfig.message);
    }

    getInquiry() {
      return this.inquiry;
    }
}

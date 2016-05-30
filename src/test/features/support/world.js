import Address from '../../../main/webapp/assets/js/Address';
import Inquiry from '../../../main/webapp/assets/js/Inquiry';
import Work from '../../../main/webapp/assets/js/Work';

export default class World {
  constructor () {
    this.address =  new Address('fayetteville', 'US', 'AR', 'Example St.', '72703');
    this.inquiry =  new Inquiry(this.address, 'BP', 'sample desc.', 'jared.ramirez@bytepushes.software', false, 'jared', 'ramrez', '0000000000', 'small', 'personal');
  }
  getAddress(){
    return this.address;
  }
  getInquiry(){
    return this.inquiry;
  }
}

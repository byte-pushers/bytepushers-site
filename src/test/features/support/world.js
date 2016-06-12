import Address from '../../../main/webapp/assets/js/Address';
import Inquiry from '../../../main/webapp/assets/js/Inquiry';
import Work from '../../../main/webapp/assets/js/Work';

export default class World {
  constructor () {
    let date = new Date('March 7, 2014');

    this.address =  new Address(1, 'fayetteville', 'US', 'AR', 'Example St.', '72703');
    this.inquiry =  new Inquiry(1, this.address, 'BP', 'sample desc.', 'jared.ramirez@bytepushes.software', false, 'jared', 'ramrez', '0000000000', 'small', 'personal');
    this.work = new Work(1, date, 'desc.', 'https://github.com/example/project', 'project 1', 'http://holder.ninja/400x300.svg', '9000', ['angular', 'bootsrap', 'es6']);
  }
  getAddress(){
    return this.address;
  }
  getInquiry(){
    return this.inquiry;
  }
  getWork(){
    return this.work;
  }
}

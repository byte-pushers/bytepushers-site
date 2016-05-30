import Address from './../../main/webapp/assets/js/Address';
import Inquiry from './../../main/webapp/assets/js/Inquiry';

describe('Inquiry', () => {
   it('create Inquiry', () => {
       let inqury = new Inquiry(new Address());
       console.log(inqury.toJSON());
       expect(inqury).toBeDefined();
   });
});

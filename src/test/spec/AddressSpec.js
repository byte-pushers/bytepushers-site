console.log('test');
import {Address} from './../../main/webapp/assets/Address';

describe('Address', () => {
   it('create Address', () => {

       let address = new Address();
       expect(address).toBeDefined(null);
   });
});

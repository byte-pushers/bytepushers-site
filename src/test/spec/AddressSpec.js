import Address from './../../main/webapp/assets/js/Address';

describe('Address', () => {
   it('create Address', () => {
       let address = new Address();
       expect(address).toBeDefined();
   });
});

import Address from './assets/js/Address';
import Inquiry from './assets/js/Inquiry';
import Work from './assets/js/Work';

export default (DS) => {
  DS.defineResource({
    name: 'address',
    useClass: Address
  });
  DS.defineResource({
    name: 'inquiry',
    useClass: Inquiry/*,
    hasOne: {
      address: {
        localField: 'address',
        forgienKey: ''
      }
    }*/
  });
  DS.defineResource({
    name: 'work',
    useClass: Work
  });
}

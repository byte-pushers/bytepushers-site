import Work from './../../main/webapp/assets/js/Work';

describe('Work', () => {
   it('create Work', () => {
       let work = new Work();
       expect(work).toBeDefined();
   });
});

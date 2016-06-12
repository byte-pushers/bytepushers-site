import Work from '../../../assets/js/Work.js'

class WorksController {
    constructor(WorksService, DS) {

      /*write schemas then configure store.js*/

      let address = DS.definitions.address.createInstance({
        id: 1,
        city:'fayetteville',
        country: 'US',
        state:'AR',
        street: 'Example St.',
        zip: '72703'
      });
      console.log(address.toJSON());

      this.img = 'https://c6.staticflickr.com/4/3594/3464353533_d5cf23f0fd_b.jpg';
      this.worksService = WorksService;
      this.portfolio = WorksService.portfolio;
    }
}

WorksController.$inject = ['WorksService', 'DS'];

export default WorksController;

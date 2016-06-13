import Work from '../../../assets/js/Work.js'

class WorksController {
    constructor(WorksService, DS) {
      this.worksService = WorksService;

      this.img = 'https://c6.staticflickr.com/4/3594/3464353533_d5cf23f0fd_b.jpg';
      this.portfolio = WorksService.portfolio;
    }
}

export default WorksController;

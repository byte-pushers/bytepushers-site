import Work from '../../../assets/js/Work.js'

class WorksController {
    constructor(WorksService) {
        this.img = 'https://c6.staticflickr.com/4/3594/3464353533_d5cf23f0fd_b.jpg';
        this.worksService = WorksService;

        WorksService.addWorkToPortfolio(new Work(new Date(), 'desc.', 'project 1', 'http://holder.ninja/400x300.svg', '9000', 'angular, bootsrap, es6'));
        WorksService.addWorkToPortfolio(new Work(new Date(), 'desc.', 'project 2', 'http://holder.ninja/400x300.svg', '9000', 'angular, bootsrap, es6'));
        WorksService.addWorkToPortfolio(new Work(new Date(), 'desc.', 'project 3', 'http://holder.ninja/400x300.svg', '9000', 'angular, bootsrap, es6'));
        WorksService.addWorkToPortfolio(new Work(new Date(), 'desc.', 'project 4', 'http://holder.ninja/400x300.svg', '9000', 'angular, bootsrap, es6'));
        WorksService.addWorkToPortfolio(new Work(new Date(), 'desc.', 'project 5', 'http://holder.ninja/400x300.svg', '9000', 'angular, bootsrap, es6'));

        this.portfolio = WorksService.portfolio;
    }
}

WorksController.$inject = ['WorksService'];

export default WorksController;

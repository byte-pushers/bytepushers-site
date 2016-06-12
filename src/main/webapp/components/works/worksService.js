import Work from '../../assets/js/Work';

export default class WorksService {
    constructor() {
      this.worksPortfolio = [];
    }

    get portfolio() {
      return this.worksPortfolio;
    }

    set portfolio(newWorksPortfolio) {
      this.worksPortfolio = newWorksPortfolio;
    }

    addWorkToPortfolio(config) {
      this.worksPortfolio.push(new Work(config.id, config.date, config.description, config.link, config.name, config.photo, config.revenue, config.technologies));
    }
}

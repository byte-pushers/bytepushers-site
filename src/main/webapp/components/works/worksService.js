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

    addWorkToPortfolio(work) {
      this.worksPortfolio.push(work);
    }
}

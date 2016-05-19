import Work from '../../assets/js/Work';

export default class WorksService {
    constructor() {
      this.worksArray = [];
    }

    get works() {
      return this.worksArray;
    }

    set works(newWorksArray) {
      this.worksArray = newWorksArray;
    }

    addWork(work) {
      this.worksArray.push(work);
    }
}

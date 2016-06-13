import Work from '../../../assets/js/Work.js'

  /*successfully inject into js-data, next will move to getting the display from worksPorfolio*/

let _resetFields = (work) => {
    work.id = null;
    work.date = new Date();
    work.description = '';
    work.link = '';
    work.name = '';
    work.revenue = '';
    work.technologies = '';

}

class NewWorksController {
    constructor(WorksService, DS) {
      this.worksService = WorksService;
      this.DS = DS;

      this.img = 'https://c6.staticflickr.com/4/3594/3464353533_d5cf23f0fd_b.jpg';
      this.portfolio = WorksService.portfolio;
      this.workUIObject = new Work().toUIObject();

      _resetFields(this.workUIObject);
    }

    onChange(element) {
      this.workUIObject.photo = element.files[0];
    }

    click(isValid) {
        if(isValid){
          /*todo: ask tonte about best practice, and file uploading in general*/
          this.workUIObject.id = 1;
          this.workUIObject.photo = document.querySelector('input[type=file]').files[0];
          this.workUIObject.technologies = this.workUIObject.technologies.split(',');

          this.worksService.addWorkToPortfolio(this.workUIObject);
          this.DS.inject('work', this.workUIObject);
          _resetFields(this.workUIObject);
          this.response = 'Message sent!';
          console.log(this.worksService.portfolio);
          console.log(this.DS.get('work', 1));
        }
    }
}

export default NewWorksController;

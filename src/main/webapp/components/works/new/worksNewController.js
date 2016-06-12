import Work from '../../../assets/js/Work.js'

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
    constructor(WorksService) {
        this.img = 'https://c6.staticflickr.com/4/3594/3464353533_d5cf23f0fd_b.jpg';
        this.worksService = WorksService;
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
          _resetFields(this.workUIObject);
          this.response = 'Message sent!';
          console.log(this.worksService.portfolio);
        }
    }
}

NewWorksController.$inject = ['WorksService'];

export default NewWorksController;

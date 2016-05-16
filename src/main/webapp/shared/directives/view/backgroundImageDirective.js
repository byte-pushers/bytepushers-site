export default class backgroundImageDirective {
    constructor() {

    }

    link(scope, element, attr) {
      attr.$observe('backgroundImage', function(value) {
          element.css({
              'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(' + value +')',
              'background-size' : 'cover',
              'padding-bottom': '60%',
              'background-attachment': 'fixed'
          });
      });
    }
}

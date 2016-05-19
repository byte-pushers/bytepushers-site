import Bytepushers from 'bytepushers-js-core';
/*if Bytepushers import fails, make sure that index.js is defined in node_modules/bytepushers-js-core*/

/*todo: finish creating work object, move to view and controler to display an array of them? then format and
  create form to add new work objects*/

  let _toJSON = (date, description, name, photo, revenue, technologies) => {
    let jsonDate = '"' + date + '"',
        jsonDescription = '"' + description + '"',
        jsonName = '"' + name + '"',
        jsonPhoto = '"' + photo + '"',
        jsonRevenue = '"' + revenue + '"',
        jsonTechnologies = '"' + technologies + '"',
        json = '{' +
            '"date": ' + jsonDate + ',' +
            '"description": ' + jsonDescription + ',' +
            '"name": ' + jsonName + ',' +
            '"photo": ' + jsonPhoto + ',' +
            '"revenue": ' + jsonRevenue + ',' +
            '"technologies": ' +  jsonTechnologies +
        '}';
    return json;
  }

export default class Work {
    constructor(date, description, name, photo, revenue, technologies) {
      this.date = (Object.isDefined(date) && Object.isDate(date)) ? date : null;
      this.description = (Object.isDefined(description) && Object.isString(description)) ? description : null;
      this.name = (Object.isDefined(name) && Object.isString(name)) ? name : null;
      this.photo = (Object.isDefined(photo)) ? photo : null;
      this.revenue = (Object.isDefined(revenue) && Object.isString(revenue)) ? revenue : null;
      this.technologies = (Object.isDefined(technologies) && Object.isArray(technologies)) ? technologies : null;
    }

    toJSON() {
      return _toJSON(this.date, this.description, this.name, this.photo, this.revenue, this.technologies);
    }

    toUIObject() {
      return JSON.parse(_toJSON(this.date, this.description, this.name, this.photo, this.revenue, this.technologies));
    }
}

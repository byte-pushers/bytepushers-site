import Bytepushers from 'bytepushers-js-core';

  let _toJSON = (date, description, link, name, photo, revenue, technologies) => {
    let jsonDate = '"' + date + '"',
        jsonDescription = '"' + description + '"',
        jsonLink = '"' + link + '"',
        jsonName = '"' + name + '"',
        jsonPhoto = '"' + photo + '"',
        jsonRevenue = '"' + revenue + '"',
        jsonTechnologies = '"' + technologies + '"',
        json = '{' +
            '"date": ' + jsonDate + ',' +
            '"description": ' + jsonDescription + ',' +
            '"link": ' + jsonLink + ',' +
            '"name": ' + jsonName + ',' +
            '"photo": ' + jsonPhoto + ',' +
            '"revenue": ' + jsonRevenue + ',' +
            '"technologies": ' +  jsonTechnologies +
        '}';
    return json;
  }

export default class Work {
    constructor(date, description, link, name, photo, revenue, technologies) {
      this.date = (Object.isDefined(date) && Object.isDate(date)) ? date : null;
      this.description = (Object.isDefined(description) && Object.isString(description)) ? description : null;
      this.link = (Object.isDefined(link) && Object.isString(link)) ? link : null;
      this.name = (Object.isDefined(name) && Object.isString(name)) ? name : null;
      this.photo = (Object.isDefined(photo)) ? photo : null;
      this.revenue = (Object.isDefined(revenue) && Object.isString(revenue)) ? revenue : null;
      this.technologies = (Object.isDefined(technologies) && Object.isArray(technologies)) ? technologies : null;
    }

    toJSON() {
      return _toJSON(this.date, this.description, this.link, this.name, this.photo, this.revenue, this.technologies);
    }

    toUIObject() {
      return JSON.parse(_toJSON(this.date, this.description, this.link, this.name, this.photo, this.revenue, this.technologies));
    }
}

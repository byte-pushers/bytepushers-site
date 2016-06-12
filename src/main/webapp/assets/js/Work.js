import Bytepushers from 'bytepushers-js-core';

  let _arrayToJSON = (array) => {
    let json = '[';

    for(let obj of array) {
      json += obj + ',';
    }
    if(json.endsWith(',')){
      json = json.slice(0, -1);
    }

    json += ']';
    return json;
  }

  let _toJSON = (id, date, description, link, name, photo, revenue, technologies) => {
    let jsonId = '"' + id + '"',
        jsonDate = '"' + date + '"',
        jsonDescription = '"' + description + '"',
        jsonLink = '"' + link + '"',
        jsonName = '"' + name + '"',
        jsonPhoto = '"' + photo + '"',
        jsonRevenue = '"' + revenue + '"',
        json = '{' +
            '"id": ' + jsonId + ',' +
            '"date": ' + jsonDate + ',' +
            '"description": ' + jsonDescription + ',' +
            '"link": ' + jsonLink + ',' +
            '"name": ' + jsonName + ',' +
            '"photo": ' + jsonPhoto + ',' +
            '"revenue": ' + jsonRevenue + ',' +
            '"technologies": ' +  _arrayToJSON(technologies) +
            '}';
    return json;
  }

export default class Work {
    constructor(id, date, description, link, name, photo, revenue, technologies) {
      this.id = (Object.isDefined(id)) ? id : null;
      this.date = (Object.isDefined(date) && Object.isDate(date)) ? date : null;
      this.description = (Object.isDefined(description) && Object.isString(description)) ? description : null;
      this.link = (Object.isDefined(link) && Object.isString(link)) ? link : null;
      this.name = (Object.isDefined(name) && Object.isString(name)) ? name : null;
      this.photo = (Object.isDefined(photo)) ? photo : null;
      this.revenue = (Object.isDefined(revenue) && Object.isString(revenue)) ? revenue : null;
      this.technologies = (Object.isDefined(technologies) && Object.isArray(technologies)) ? technologies : [];
    }

    toJSON() {
      return _toJSON(this.id, this.date, this.description, this.link, this.name, this.photo, this.revenue, this.technologies);
    }

    toUIObject() {
      return JSON.parse(_toJSON(this.id, this.date, this.description, this.link, this.name, this.photo, this.revenue, this.technologies));
    }
}

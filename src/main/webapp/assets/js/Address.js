import Bytepushers from 'bytepushers-js-core';

let _toJSON = (city, country, state, street, zip) => {
  let jsonCity = '"' + city + '"',
      jsonCountry = '"' + country + '"',
      jsonState = '"' + state + '"',
      jsonStreet= '"' + street + '"',
      jsonZip = '"' + zip + '"',
      json = '{' +
          '"city": ' + jsonCity + ',' +
          '"country": ' + jsonCountry + ',' +
          '"street": ' + jsonState + ',' +
          '"state": ' + jsonStreet + ',' +
          '"zip": ' + jsonZip +
      '}';
  return json;
}

export default class Address {
    constructor(city, country, state, street, zip) {
      this.city = (Object.isDefined(city) && Object.isString(city)) ? city : null;
      this.country = (Object.isDefined(country) && Object.isString(country)) ? country : null;
      this.state = (Object.isDefined(state) && Object.isString(state)) ? state : null;
      this.street = (Object.isDefined(street) && Object.isString(street)) ? street : null;
      this.zip = (Object.isDefined(zip) && Object.isString(city)) ? zip : null;
    }

    toJSON() {
      return _toJSON(this.city, this.country, this.state, this.street, this.zip);
    }

    toUIObject() {
      return JSON.parse(_toJSON(this.city, this.country, this.state, this.street, this.zip));
    }
}

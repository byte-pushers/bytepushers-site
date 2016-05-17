import Bytepushers from '../libs/bytepushers/bytepushers-js-core.min';

let _toJSON = (city, country, street, state, zip) => {
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
    constructor(city, country, street, state, zip) {
      this.city = (Object.isDefined(city)) ? city : null;
      this.country = (Object.isDefined(country)) ? country : null;
      this.state = (Object.isDefined(state)) ? state : null;
      this.street = (Object.isDefined(street)) ? street : null;
      this.zip = (Object.isDefined(zip)) ? zip : null;
    }

    toJSON() {
      return _toJSON(this.city, this.country, this.state, this.street, this.zip);
    }

    toUIObject() {
      return JSON.parse(_toJSON(this.city, this.country, this.state, this.street, this.zip));
    }
}

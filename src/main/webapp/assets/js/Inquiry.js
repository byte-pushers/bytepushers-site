/*todo: add additional fields to inquire. rename inquire(look at stickies). */

import Bytepushers from '../libs/bytepushers/bytepushers-js-core.min';

let _toJSON = (name, email, phoneNumber, message) => {
  var jsonName = '"' + name + '"',
      jsonEmail = '"' + email + '"',
      jsonPhoneNumber = '"' + phoneNumber + '"',
      jsonMessage = '"' + message + '"',
      json = '{' +
          '"name": ' + jsonName + ',' +
          '"email": ' + jsonEmail + ',' +
          '"phoneNumber": ' + jsonPhoneNumber + ',' +
          '"message": ' + jsonMessage +
      '}';
  return json;
}

export default class Inquiry {
    constructor(name, email, phoneNumber, message) {
      this.name = (Object.isDefined(name)) ? name : null;
      this.email = (Object.isDefined(email)) ? email : null;
      this.phoneNumber = (Object.isDefined(phoneNumber)) ? phoneNumber : null;
      this.message = (Object.isDefined(message)) ? message : null;
    }

    toJSON() {
      return _toJSON(this.name, this.email, this.phoneNumber, this.message);
    }

    toUIObject() {
      let UIObject = JSON.parse(_toJSON(this.name, this.email, this.phoneNumber, this.message));
      return UIObject;
    }
}

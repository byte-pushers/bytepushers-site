import Bytepushers from '../libs/bytepushers/bytepushers-js-core.min';
import Address from './Address'

let _toJSON = (address, company, description, email, funded, nameFirst, nameLast, phoneNumber, projectSize, projectType) => {
  let jsonAddress= address.toJSON(),
      jsonCompany = '"' + company + '"',
      jsonDescription = '"' + description + '"',
      jsonEmail = '"' + email + '"',
      jsonFunded = '"' + funded + '"',
      jsonNameFirst = '"' + nameFirst + '"',
      jsonNameLast = '"' + nameLast + '"',
      jsonPhoneNumber = '"' + phoneNumber + '"',
      jsonProjectSize= '"' + projectSize + '"',
      jsonProjectType = '"' + projectType + '"',
      json = '{' +
          '"address": ' + jsonAddress + ',' +
          '"description": ' + jsonDescription + ',' +
          '"company": ' + jsonCompany + ',' +
          '"email": ' + jsonEmail + ',' +
          '"funded": ' + jsonFunded + ',' +
          '"nameFirst": ' + jsonNameFirst + ',' +
          '"nameLast": ' + jsonNameLast + ',' +
          '"phoneNumber": ' + jsonPhoneNumber + ',' +
          '"projectSize": ' + jsonProjectSize + ',' +
          '"projectType": ' + jsonProjectType +
      '}';
  return json;
}

export default class Inquiry {
    constructor(address, company, description, email, funded, nameFirst, nameLast, phoneNumber, projectSize, projectType) {
      this.address = (Object.isDefined(address)) ? address : new Address();
      this.company = (Object.isDefined(company && Object.isString(company))) ? company : null;
      this.description = (Object.isDefined(description) && Object.isString(description)) ? description : null;
      this.email = (Object.isDefined(email)) ? email : null;
      this.funded = (Object.isDefined(funded) && Object.isBoolean(funded)) ? funded : null;
      this.nameFirst = (Object.isDefined(nameFirst) && Object.isString(nameFirst)) ? nameFirst : null;
      this.nameLast = (Object.isDefined(nameLast) && Object.isString(nameLast)) ? nameLast : null;
      this.phoneNumber = (Object.isDefined(phoneNumber) && Object.isString(phoneNumber)) ? phoneNumber : null;
      this.projectSize = (Object.isDefined(projectSize)) ? projectSize : null;
      this.projectType = (Object.isDefined(projectType)) ? projectType : null;

    }

    toJSON() {
      return _toJSON(this.address, this.company, this.description, this.email, this.funded, this.nameFirst, this.nameLast, this.phoneNumber, this.projectSize, this.projectType);
    }

    toUIObject() {
      return JSON.parse(_toJSON(this.address, this.company, this.description, this.email, this.funded, this.nameFirst, this.nameLast, this.phoneNumber, this.projectSize, this.projectType));
    }
}

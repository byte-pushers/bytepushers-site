/*import zombie from 'zombie';*/

export default class World {
  constructor () {
    this.browser = 'browser';
  }
  visit (url, callback) {
    return 'visited: ' + url;
  }
}

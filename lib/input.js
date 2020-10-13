'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.validateCommand(Object.keys(args)[1]);
    this.payload = this.validatePayload(Object.values(args)[1]);
    if (this.action == false) {
      console.log('invalid command');
    } else if (this.payload == false) {
      console.log('Invalid!! Please add a valid Text');
    } else {
      console.log({
        action: this.action,
        payload: this.payload,
      });
    }
  }
  validateCommand(args) {
    if (args == 'add' || args == 'a') {
      return args;
    } else {
      return '';
    }
  }

  validatePayload(args) {
    if (args !== undefined || args !== '') {
      return args;
    } else {
      return '';
    }
  }
}

module.exports = Input;

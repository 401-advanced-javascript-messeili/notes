'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.validateCommand(Object.keys(args)[1]);
    this.payload = this.validatePayload(Object.values(args)[1]);
    this.category = this.validateCategory(
      // eslint-disable-next-line comma-dangle
      Object.keys(args)[2] ? Object.keys(args)[2] : ''
    );
    this.categoryName = this.categoryNameFunction(Object.values(args)[2]);
    if (this.action == false) {
      console.log('invalid command');
    } else if (this.payload == false) {
      console.log('Invalid!!, Please Enter a valid text');
    } else {
      // console.log({
      //   action: this.action,
      //   payload: this.payload,
      //   category: this.categoryName,
      // });
    }
  }

  validateCommand(args) {
    if (args == 'add' || args == 'a' || args == 'list' || args == 'delete') {
      return args;
    } else {
      return '';
    }
  }

  validatePayload(args) {
    if (args !== undefined && args !== '') {
      return args;
    } else {
      return '';
    }
  }

  validateCategory(args) {
    if (args == 'category') {
      return args;
    } else {
      return '';
    }
  }
  categoryNameFunction(args) {
    if (args !== undefined && args !== '') {
      return args;
    } else {
      return '';
    }
  }

  valid() {
    return this.action || this.category;
  }
}

module.exports = Input;

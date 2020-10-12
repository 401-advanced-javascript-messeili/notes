'use strict';

const minimist = require('minimist');

const Input = function () {
  const arg = minimist(process.argv.slice(2));
  this.command = this.validateCommand(arg);
  this.payload = this.validatePayload(arg);
  if (this.command == false) {
    console.log('Wrong command');
  } else if (this.payload == false) {
    console.log('There is no text, please enter a message.');
  } else {
    return {
      action: 'add',
      payload: Object.values(arg)[1],
    };
  }
};

Input.prototype.validateCommand = function (arg) {
  if (Object.keys(arg)[1] === 'add' || Object.keys(arg)[1] === 'a') {
    return true;
  } else {
    return false;
  }
};
Input.prototype.validatePayload = function (arg) {
  if (Object.values(arg)[1] !== undefined && Object.values(arg)[1] !== '') {
    return true;
  } else {
    return false;
  }
};
module.exports = Input;

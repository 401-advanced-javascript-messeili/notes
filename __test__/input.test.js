'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
    _: [],
    a: 'this is a new note',
  };
});
describe('Input', () => {
  describe('validateCommand', () => {
    it('Given right command and text', () => {
      const arg = new Input();

      console.log(arg, 'this is the arg');
      expect(arg.validateCommand('add' || 'a')).toBeTruthy() &&
        expect(arg.validatePayload('Mohammad')).toBeTruthy();
    });
    it('valid() If the user specifies the flag, but doesn’t provide any text', () => {
      const arg = new Input();
      // arg.payload = '';
      expect(arg.validatePayload('')).toBeFalsy();
    });
    it('valid() If the user doesn’t provide a valid command', () => {
      const arg = new Input();
      // arg.action = undefined;
      expect(arg.validateCommand('ss')).toBeFalsy();
    });
  });
});

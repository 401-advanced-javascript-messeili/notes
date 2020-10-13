'use strict';

const Note = require('../lib/notes.js');
jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  it('does nothing when execute() with invalid options', () => {
    const note = new Note();
    note.execute({ action: 'dd', payload: 'A new note Added' });
    expect(console.log).not.toHaveBeenCalled();
  });
  it('log out options when execute() with options', () => {
    const note = new Note();
    note.execute({ action: 'add', payload: 'A new note Added' });
    expect(console.log).toHaveBeenCalled();
  });
});

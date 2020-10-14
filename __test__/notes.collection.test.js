'use strict';
require('@code-fellows/supergoose');

const note = require('../lib/models/notes-collection.js');
describe('note Model', () => {
  it('can create() a new note item', () => {
    const obj = { text: 'test note', category: 'haveFun' };
    return note.create(obj).then((record) => {
      Object.keys(obj).forEach((key) => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });
  it('can get() a note item', async () => {
    const obj = { text: 'test note', category: 'haveFun' };
    const expected = { text: 'test note', category: 'haveFun' };
    const record = await note.create(obj);
    const noteItem = await note.get(record._id);
    Object.keys(expected).forEach((key) => {
      expect(noteItem[0][key]).toEqual(record[key]);
    });
  });

  it('can delete() a note item', async () => {
    const obj = { text: 'test note', category: 'haveFun' };
    const record = await note.create(obj);
    await note.delete(record._id);
    const noteItem = await note.get(record._id);
    expect(noteItem[0]).toEqual(undefined);
  });
});

// const obj = { text: 'test note', category: 'haveFun' };
//     const expected = { text: 'test note', category: 'haveFun' };
//     return note.create(obj).then((record) => {
//       console.log(record);
//       return note.get({ _id: record._id }).then((result) => {
//         console.log(result);
//         Object.keys(expected).forEach((key) => {
//           expect(result[key]).toEqual(expected[key]);
//         });
//       });
//     });
//   });

/* eslint-disable comma-dangle */
'use strict';
const record = require('./models/notes-collection.js');

class Notes {
  constructor() {}

  execute(obj) {
    if (obj.action == 'add') {
      return this.add(obj);
    } else if (obj.action == 'delete') {
      return this.delete(obj.payload);
    } else if (obj.action == 'list') {
      return this.list(obj);
    }
  }

  async add(obj) {
    const obj2 = {
      text: obj.payload,
      category: obj.categoryName,
    };
    const newNote = await record.create(obj2);
    console.log('Note Saved', newNote);
  }

  async delete(id) {
    await record.delete(id);
    console.log(`Note Deleted ${id}`);
  }
  async list(obj) {
    if (obj.action && obj.categoryName == '') {
      const allNotes = await record.get();
      allNotes.forEach((val) => {
        console.log(
          val.text,
          `\n Category : ${val.category}          ID : ${val._id} `
        );
        console.log(
          '----------------------------------------------------------------------'
        );
      });
    } else {
      const allNotes = await record.get({ category: obj.categoryName });
      allNotes.forEach((val) => {
        console.log(
          val.text,
          `\n Category : ${val.category}          ID : ${val._id} `
        );
        console.log(
          '----------------------------------------------------------------------'
        );
      });
    }
  }
}

module.exports = Notes;

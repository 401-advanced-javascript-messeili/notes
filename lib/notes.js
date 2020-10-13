/* eslint-disable comma-dangle */
'use strict';
const Record = require('./models/notes-schema.js');

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
    console.log(obj);
    const obj2 = {
      text: obj.payload,
      category: obj.categoryName,
    };
    const newNote = new Record(obj2);
    await newNote.save();
    console.log('Note Saved', newNote);
  }

  async delete(id) {
    await Record.deleteOne({ _id: id });
    console.log(`Note Deleted ${id}`);
  }
  async list(obj) {
    if (obj.action && obj.categoryName == '') {
      const allNotes = await Record.find({});
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
      const allNotes = await Record.find({ category: obj.categoryName });
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

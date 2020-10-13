'use strict';

class Notes {
  constructor() {}

  execute(obj) {
    if (obj.action == 'add') {
      this.add(obj);
    }
  }

  add(obj) {
    let note = {
      id: Math.ceil(Math.random() * 100),
      text: obj.payload,
    };
    // console.log(note);
    console.log(`Adding Note : ${note.text}`);
  }
}

module.exports = Notes;

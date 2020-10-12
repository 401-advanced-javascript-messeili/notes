'use strict';
const Notes = function (obj) {
  this.execute(obj);
};
Notes.prototype.execute = function (obj) {
  let method = obj.action;
  if (method == 'add') {
    this.add(obj);
  }
};
Notes.prototype.add = function (obj) {
  let note = {
    ID: Math.ceil(Math.random() * 100),
    message: obj.payload,
  };
  console.log(`Adding Note: ${note.message}`);
  console.log(`ID ${note.ID}`);
};
module.exports = Notes;

'use strict';
const model = require('./notes-schema.js');

class Collection {
  constructor() {}
  get(obj) {
    if (obj) {
      return model.find(obj);
    } else {
      return model.find({});
    }
  }
  create(record) {
    const newRecord = new model(record);
    return newRecord.save();
  }
  update(_id, record) {
    // {new:true} will return the new updated record without it it will return the old record
    return model.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return model.findByIdAndDelete(_id);
  }
}

module.exports = new Collection();
